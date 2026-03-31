import { NextResponse } from 'next/server';

const CONVEX_URL = process.env.CONVEX_URL || process.env.NEXT_PUBLIC_CONVEX_URL || '';

export async function GET() {
  try {
    if (!CONVEX_URL) {
      return NextResponse.json({ error: 'CONVEX_URL not configured' }, { status: 500 });
    }

    const response = await fetch(`${CONVEX_URL}/api/query`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: 'messages:checkNewMessages',
        args: {
          recipient: 'system',
        },
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return NextResponse.json({ error: `Convex error: ${err}` }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json({ messages: data.value || [] });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Unknown error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
