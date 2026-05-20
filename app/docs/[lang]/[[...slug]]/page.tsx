import { source } from '@/lib/source';
import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { Metadata } from 'next';
import { MarkdownCopyButton, ViewOptionsPopover } from '@/components/ai/page-actions';

const BASE_URL = 'https://www.vantagepeers.com';

export default async function Page(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = `${page.url}.mdx`;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsBody>
        <div className="flex flex-row gap-2 items-center not-prose mb-4">
          <MarkdownCopyButton markdownUrl={markdownUrl} />
          <ViewOptionsPopover
            markdownUrl={markdownUrl}
            githubUrl={`https://github.com/vantageos-agency/vantage-peers-site/tree/main/content/docs`}
          />
        </div>
        <DocsTitle>{page.data.title}</DocsTitle>
        {page.data.description ? (
          <DocsDescription>{page.data.description}</DocsDescription>
        ) : null}
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return source.generateParams('slug', 'lang');
}

export async function generateMetadata(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const slugPath = params.slug?.join('/') ?? '';

  // Canonical always points to the un-prefixed EN path (/docs/slug)
  // For FR pages the canonical points to the EN equivalent (cross-locale canonical)
  // except we set hreflang so Google picks the right locale URL per user.
  const canonicalUrl =
    slugPath === ''
      ? `${BASE_URL}/docs`
      : `${BASE_URL}/docs/${slugPath}`;

  const enUrl =
    slugPath === '' ? `${BASE_URL}/docs` : `${BASE_URL}/docs/${slugPath}`;
  const frUrl =
    slugPath === '' ? `${BASE_URL}/docs/fr` : `${BASE_URL}/docs/fr/${slugPath}`;

  // For FR pages, self-canonical is the FR URL; for EN pages it's the EN URL.
  const selfCanonical = params.lang === 'fr' ? frUrl : canonicalUrl;

  // Check if a FR counterpart exists via the source loader
  const frPage = source.getPage(params.slug, 'fr');
  const hasFr = Boolean(frPage);

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: selfCanonical,
      languages: {
        en: enUrl,
        ...(hasFr ? { fr: frUrl } : {}),
        'x-default': enUrl,
      },
    },
  };
}
