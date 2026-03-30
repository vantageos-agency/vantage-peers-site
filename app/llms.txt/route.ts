import { source } from '@/lib/source';
import { llms } from 'fumadocs-core/source';

export const dynamic = 'force-static';

export function GET() {
  const { index } = llms(source);
  return new Response(index(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
