import defaultMdxComponents from "fumadocs-ui/mdx";
import {
	DocsBody,
	DocsDescription,
	DocsPage,
	DocsTitle,
} from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
	MarkdownCopyButton,
	ViewOptionsPopover,
} from "@/components/ai/page-actions";
import { source } from "@/lib/source";

const BASE_URL = "https://www.vantagepeers.com";

// JSON-LD injection via dangerouslySetInnerHTML is the standard pattern for
// server-rendered structured data. No user input is interpolated — values
// come from static MDX frontmatter or build-time constants.
function JsonLd({ data }: { data: Record<string, unknown> }) {
	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data — MDX frontmatter values, no user input interpolated
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}

function getDocsBreadcrumbSchema(
	lang: string,
	slug: string[] | undefined,
	pageTitle: string,
) {
	const slugParts = slug ?? [];
	const pageUrl = `${BASE_URL}/docs/${lang}${slugParts.length > 0 ? `/${slugParts.join("/")}` : ""}`;
	const docsHomeUrl = `${BASE_URL}/docs/${lang}`;
	const docsHomeName = lang === "fr" ? "Documentation" : "Docs";

	const items: Array<{
		"@type": string;
		position: number;
		name: string;
		item?: string;
	}> = [
		{
			"@type": "ListItem",
			position: 1,
			name: "VantagePeers",
			item: lang === "fr" ? `${BASE_URL}/fr` : BASE_URL,
		},
		{ "@type": "ListItem", position: 2, name: docsHomeName, item: docsHomeUrl },
	];

	if (slugParts.length > 0) {
		items.push({
			"@type": "ListItem",
			position: 3,
			name: pageTitle,
			item: pageUrl,
		});
	}

	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"@id": `${pageUrl}#breadcrumb`,
		itemListElement: items,
	};
}

function getTechArticleSchema(
	lang: string,
	slug: string[] | undefined,
	title: string,
	description: string | undefined,
) {
	const slugParts = slug ?? [];
	const pageUrl = `${BASE_URL}/docs/${lang}${slugParts.length > 0 ? `/${slugParts.join("/")}` : ""}`;
	const buildDate = new Date().toISOString().split("T")[0];

	return {
		"@context": "https://schema.org",
		"@type": "TechArticle",
		"@id": `${pageUrl}#article`,
		headline: title,
		description: description ?? title,
		url: pageUrl,
		inLanguage: lang === "fr" ? "fr" : "en",
		datePublished: buildDate,
		dateModified: buildDate,
		author: {
			"@type": "Person",
			"@id": `${BASE_URL}/#founder`,
			name: "Laurent Perello",
		},
		publisher: {
			"@id": `${BASE_URL}/#organization`,
		},
		isPartOf: {
			"@id": `${BASE_URL}/#website`,
		},
	};
}

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
				<JsonLd
					data={getDocsBreadcrumbSchema(
						params.lang,
						params.slug,
						page.data.title,
					)}
				/>
				<JsonLd
					data={getTechArticleSchema(
						params.lang,
						params.slug,
						page.data.title,
						page.data.description,
					)}
				/>
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
	return source.generateParams("slug", "lang");
}

export async function generateMetadata(props: {
	params: Promise<{ lang: string; slug?: string[] }>;
}): Promise<Metadata> {
	const params = await props.params;
	const page = source.getPage(params.slug, params.lang);
	if (!page) notFound();

	const slugPath = params.slug?.join("/") ?? "";

	// Canonical always points to the un-prefixed EN path (/docs/slug)
	// For FR pages the canonical points to the EN equivalent (cross-locale canonical)
	// except we set hreflang so Google picks the right locale URL per user.
	const canonicalUrl =
		slugPath === "" ? `${BASE_URL}/docs` : `${BASE_URL}/docs/${slugPath}`;

	const enUrl =
		slugPath === "" ? `${BASE_URL}/docs` : `${BASE_URL}/docs/${slugPath}`;
	const frUrl =
		slugPath === "" ? `${BASE_URL}/docs/fr` : `${BASE_URL}/docs/fr/${slugPath}`;

	// For FR pages, self-canonical is the FR URL; for EN pages it's the EN URL.
	const selfCanonical = params.lang === "fr" ? frUrl : canonicalUrl;

	// Check if a FR counterpart exists via the source loader
	const frPage = source.getPage(params.slug, "fr");
	const hasFr = Boolean(frPage);

	return {
		title: page.data.title,
		description: page.data.description,
		alternates: {
			canonical: selfCanonical,
			languages: {
				en: enUrl,
				...(hasFr ? { fr: frUrl } : {}),
				"x-default": enUrl,
			},
		},
	};
}
