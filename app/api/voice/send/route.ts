import { NextResponse } from 'next/server';

const CONVEX_URL = process.env.CONVEX_URL || process.env.NEXT_PUBLIC_CONVEX_URL || '';

export async function POST(req: Request) {
  try {
    const { message, targetOrchestrator = 'pi' } = (await req.json()) as {
      message: string;
      targetOrchestrator?: string;
    };

    if (!message) {
      return NextResponse.json({ error: 'message is required' }, { status: 400 });
    }

    if (!CONVEX_URL) {
      return NextResponse.json({ error: 'CONVEX_URL not configured' }, { status: 500 });
    }

    const response = await fetch(`${CONVEX_URL}/api/mutation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: 'messages:sendMessage',
        args: {
          from: 'system',
          channel: targetOrchestrator,
          content: `[VOICE] ${message}`,
        },
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return NextResponse.json({ error: `Convex error: ${err}` }, { status: response.status });
    }

    const result = await response.json();
    return NextResponse.json({ messageId: result.value, status: 'sent' });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Unknown error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
