import { source } from '@/lib/source';

export const dynamic = 'force-static';

export async function GET() {
  const pages = source.getPages();

  const sections = await Promise.all(
    pages.map(async (page) => {
      const title = page.data.title || 'Untitled';
      const url = page.url;

      let markdown = '';
      try {
        markdown = await page.data.getText('processed');
      } catch {
        // includeProcessedMarkdown not enabled or unavailable — fall back to description
        markdown = page.data.description ?? '';
      }

      return `# ${title}\nURL: ${url}\n\n${markdown}`;
    }),
  );

  return new Response(sections.join('\n\n---\n\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
