import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { text } = (await req.json()) as { text: string };

    if (!text) {
      return NextResponse.json({ error: 'text is required' }, { status: 400 });
    }

    const falKey = process.env.FAL_KEY;
    if (!falKey) {
      return NextResponse.json({ error: 'FAL_KEY not configured' }, { status: 500 });
    }

    const res = await fetch('https://fal.run/fal-ai/minimax-tts/speech-02-hd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Key ${falKey}`,
      },
      body: JSON.stringify({
        text,
        voice_id: 'Wise_Woman',
        speed: 1.05,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: `fal.ai API error: ${err}` }, { status: res.status });
    }

    const data = await res.json();
    const audio_url = data.audio?.url ?? '';

    if (!audio_url) {
      return NextResponse.json({ error: 'No audio URL in fal.ai response' }, { status: 502 });
    }

    return NextResponse.json({ audio_url });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Unknown error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
