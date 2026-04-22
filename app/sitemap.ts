import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://www.vantagepeers.com";

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1.0,
			alternates: {
				languages: {
					en: baseUrl,
					fr: `${baseUrl}/fr`,
				},
			},
		},
		{
			url: `${baseUrl}/fr`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
			alternates: {
				languages: {
					en: baseUrl,
					fr: `${baseUrl}/fr`,
				},
			},
		},
		{
			url: `${baseUrl}/privacy`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.3,
			alternates: {
				languages: {
					en: `${baseUrl}/privacy`,
					fr: `${baseUrl}/fr/privacy`,
				},
			},
		},
		{
			url: `${baseUrl}/fr/privacy`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.3,
			alternates: {
				languages: {
					en: `${baseUrl}/privacy`,
					fr: `${baseUrl}/fr/privacy`,
				},
			},
		},
		...([
			"/docs",
			"/docs/getting-started",
			"/docs/architecture",
			"/docs/tools",
			"/docs/memory",
			"/docs/messaging",
			"/docs/tasks",
		].map((path) => ({
			url: `${baseUrl}${path}`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.7,
		}))),
	];
}
