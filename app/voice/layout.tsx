export default function VoiceLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[#0a0a0a] text-white">{children}</div>;
}

export const metadata = { title: 'VantagePeers Voice' };
