const BASE_URL = "https://www.vantagepeers.com";

// JSON-LD injection via dangerouslySetInnerHTML is the standard pattern for
// server-rendered structured data. No user input is interpolated here — all
// values are static literals defined in this file.

function JsonLd({ data }: { data: Record<string, unknown> }) {
	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data — static literals only, no user input interpolated
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}

function getWebPageSchema(locale: string) {
	const isEn = locale !== "fr";
	const pageUrl = isEn ? `${BASE_URL}/railway` : `${BASE_URL}/fr/railway`;

	return {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"@id": `${pageUrl}#webpage`,
		name: isEn
			? "Self-host VantagePeers MCP on Railway in <10 min"
			: "Auto-hébergez VantagePeers MCP sur Railway en <10 min",
		description: isEn
			? "One-click Railway deploy for the VantagePeers MCP server. Connect Convex, set env vars, start coordinating agents in minutes."
			: "Déploiement Railway en un clic pour VantagePeers MCP. Connectez Convex, définissez les variables d'environnement, commencez à coordonner vos agents en quelques minutes.",
		url: pageUrl,
		inLanguage: isEn ? "en" : "fr",
		isPartOf: {
			"@id": `${BASE_URL}/#website`,
		},
		breadcrumb: {
			"@type": "BreadcrumbList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "VantagePeers",
					item: isEn ? BASE_URL : `${BASE_URL}/fr`,
				},
				{
					"@type": "ListItem",
					position: 2,
					name: isEn ? "Railway Deploy" : "Déploiement Railway",
					item: pageUrl,
				},
			],
		},
	};
}

export function RailwayStructuredData({ locale = "en" }: { locale?: string }) {
	return (
		<>
			<JsonLd data={getWebPageSchema(locale)} />
		</>
	);
}
