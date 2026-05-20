import type { MetadataRoute } from "next";

const BASE_URL = "https://www.vantagepeers.com";

// EN doc slugs that have a FR counterpart
const EN_DOCS_WITH_FR: string[] = [
	"",
	"getting-started",
	"getting-started/quickstart",
	"getting-started/add-orchestrator",
	"getting-started/supported-tools",
	"core-concepts/architecture",
	"capabilities/memory",
	"capabilities/messaging",
	"capabilities/tasks",
	"capabilities/missions",
	"capabilities/mandates",
	"capabilities/profiles",
	"capabilities/fix-patterns",
	"capabilities/recurring-tasks",
	"infrastructure/business-units",
	"infrastructure/components",
	"infrastructure/error-monitoring",
	"infrastructure/external-tracking",
	"infrastructure/issue-resolution",
	"infrastructure/issue-stats",
	"infrastructure/issues",
	"infrastructure/mission-templates",
	"infrastructure/signatures",
	"tools",
];

// EN-only doc slugs (no FR counterpart)
const EN_DOCS_ONLY: string[] = [
	"getting-started/deploy-keys",
	"core-concepts/multi-tenancy",
];

function docEnUrl(slug: string): string {
	return slug === "" ? `${BASE_URL}/docs` : `${BASE_URL}/docs/${slug}`;
}

function docFrUrl(slug: string): string {
	return slug === "" ? `${BASE_URL}/docs/fr` : `${BASE_URL}/docs/fr/${slug}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
	// Static site pages
	const sitePages: MetadataRoute.Sitemap = [
		{
			url: BASE_URL,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1.0,
			alternates: {
				languages: {
					en: BASE_URL,
					fr: `${BASE_URL}/fr`,
					"x-default": BASE_URL,
				},
			},
		},
		{
			url: `${BASE_URL}/fr`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
			alternates: {
				languages: {
					en: BASE_URL,
					fr: `${BASE_URL}/fr`,
					"x-default": BASE_URL,
				},
			},
		},
		{
			url: `${BASE_URL}/privacy`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.3,
			alternates: {
				languages: {
					en: `${BASE_URL}/privacy`,
					fr: `${BASE_URL}/fr/privacy`,
					"x-default": `${BASE_URL}/privacy`,
				},
			},
		},
		{
			url: `${BASE_URL}/fr/privacy`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.3,
			alternates: {
				languages: {
					en: `${BASE_URL}/privacy`,
					fr: `${BASE_URL}/fr/privacy`,
					"x-default": `${BASE_URL}/privacy`,
				},
			},
		},
	];

	// EN docs with FR counterparts — emit both EN and FR entries
	const bilingual: MetadataRoute.Sitemap = EN_DOCS_WITH_FR.flatMap((slug) => [
		{
			url: docEnUrl(slug),
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.7,
			alternates: {
				languages: {
					en: docEnUrl(slug),
					fr: docFrUrl(slug),
					"x-default": docEnUrl(slug),
				},
			},
		},
		{
			url: docFrUrl(slug),
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.7,
			alternates: {
				languages: {
					en: docEnUrl(slug),
					fr: docFrUrl(slug),
					"x-default": docEnUrl(slug),
				},
			},
		},
	]);

	// EN-only docs (no FR counterpart — canonical to themselves)
	const enOnly: MetadataRoute.Sitemap = EN_DOCS_ONLY.map((slug) => ({
		url: docEnUrl(slug),
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: 0.7,
		alternates: {
			languages: {
				en: docEnUrl(slug),
				"x-default": docEnUrl(slug),
			},
		},
	}));

	return [...sitePages, ...bilingual, ...enOnly];
}
