'use client';

import { useCallback, useRef, useState } from 'react';

type Status = 'idle' | 'listening' | 'processing' | 'speaking';
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function VoicePage() {
  const [status, setStatus] = useState<Status>('idle');
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [history, setHistory] = useState<Message[]>([]);
  const [supported, setSupported] = useState(true);

  const recognitionRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const processVoice = useCallback(
    async (text: string) => {
      setStatus('processing');

      try {
        // Chat
        const chatRes = await fetch('/api/voice/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text, history }),
        });
        const chatData = await chatRes.json();

        if (!chatRes.ok) {
          setResponse(`Error: ${chatData.error}`);
          setStatus('idle');
          return;
        }

        const assistantText: string = chatData.response;
        setResponse(assistantText);
        setHistory((prev) => [
          ...prev,
          { role: 'user', content: text },
          { role: 'assistant', content: assistantText },
        ]);

        // TTS
        const ttsRes = await fetch('/api/voice/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: assistantText }),
        });
        const ttsData = await ttsRes.json();

        if (!ttsRes.ok) {
          setResponse((prev) => prev + `\n[TTS Error: ${ttsData.error}]`);
          setStatus('idle');
          return;
        }

        setAudioUrl(ttsData.audio_url);
        setStatus('speaking');

        // Play audio
        if (audioRef.current) {
          audioRef.current.src = ttsData.audio_url;
          audioRef.current.onended = () => setStatus('idle');
          audioRef.current.onerror = () => setStatus('idle');
          await audioRef.current.play().catch(() => setStatus('idle'));
        } else {
          setStatus('idle');
        }
      } catch {
        setResponse('Something went wrong. Please try again.');
        setStatus('idle');
      }
    },
    [history],
  );

  const toggleListening = useCallback(() => {
    if (status === 'listening') {
      recognitionRef.current?.stop();
      setStatus('idle');
      return;
    }

    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      setSupported(false);
      return;
    }

    const recognition = new SR();
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = false;
    recognitionRef.current = recognition;

    recognition.onresult = (event: any) => {
      const results = Array.from(event.results) as any[];
      const text = results.map((r) => r[0].transcript).join('');
      setTranscript(text);
    };

    recognition.onend = () => {
      const finalTranscript = transcript;
      // Use a small timeout to ensure state is settled
      setTimeout(() => {
        const el = document.getElementById('transcript-display');
        const text = el?.textContent ?? finalTranscript;
        if (text.trim()) {
          processVoice(text.trim());
        } else {
          setStatus('idle');
        }
      }, 100);
    };

    recognition.onerror = () => {
      setStatus('idle');
    };

    setTranscript('');
    setResponse('');
    setAudioUrl('');
    setStatus('listening');
    recognition.start();
  }, [status, transcript, processVoice]);

  const statusLabel: Record<Status, string> = {
    idle: 'Tap to speak',
    listening: 'Listening...',
    processing: 'Thinking...',
    speaking: 'Speaking...',
  };

  if (!supported) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-gray-400">
          Web Speech API is not supported in this browser. Please use Chrome or Edge.
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-4">
      <h1 className="text-2xl font-light tracking-wide opacity-60">VantagePeers Voice</h1>

      {/* Mic button */}
      <button
        onClick={toggleListening}
        disabled={status === 'processing' || status === 'speaking'}
        className={`flex h-28 w-28 items-center justify-center rounded-full border-2 transition-all duration-300 ${
          status === 'listening'
            ? 'animate-pulse border-red-500 bg-red-500/20'
            : status === 'processing' || status === 'speaking'
              ? 'cursor-not-allowed border-gray-600 bg-gray-800 opacity-50'
              : 'border-white/30 bg-white/5 hover:border-white/60 hover:bg-white/10'
        }`}
        aria-label={status === 'listening' ? 'Stop listening' : 'Start listening'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-10 w-10"
        >
          <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Z" />
          <path d="M19 11a1 1 0 1 0-2 0 5 5 0 0 1-10 0 1 1 0 1 0-2 0 7 7 0 0 0 6 6.92V21h-3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-3.08A7 7 0 0 0 19 11Z" />
        </svg>
      </button>

      {/* Status */}
      <p className="text-sm tracking-wide text-gray-400">{statusLabel[status]}</p>

      {/* Transcript */}
      {transcript && (
        <div className="w-full max-w-md rounded-lg bg-white/5 p-4">
          <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">You said</p>
          <p id="transcript-display" className="text-gray-200">
            {transcript}
          </p>
        </div>
      )}

      {/* Response */}
      {response && (
        <div className="w-full max-w-md rounded-lg bg-white/5 p-4">
          <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">Pi says</p>
          <p className="text-gray-200">{response}</p>
        </div>
      )}

      {/* Hidden audio element */}
      <audio ref={audioRef} className="hidden" />

      {/* Conversation history toggle */}
      {history.length > 0 && (
        <details className="w-full max-w-md">
          <summary className="cursor-pointer text-xs text-gray-500 hover:text-gray-400">
            Conversation history ({history.length / 2} exchanges)
          </summary>
          <div className="mt-2 max-h-48 space-y-2 overflow-y-auto">
            {history.map((msg, i) => (
              <p key={i} className={`text-sm ${msg.role === 'user' ? 'text-gray-400' : 'text-gray-200'}`}>
                <span className="font-semibold">{msg.role === 'user' ? 'You' : 'Pi'}:</span>{' '}
                {msg.content}
              </p>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}
