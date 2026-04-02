const BASE_URL = "https://vantagepeers.com";

// JSON-LD injection via dangerouslySetInnerHTML is the standard pattern for
// server-rendered structured data. No user input is interpolated here — all
// values are static literals defined in this file.

function getOrganizationSchema(locale: string) {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": `${BASE_URL}/#organization`,
		name: "ElPi Corp",
		url: "https://elpi.co",
		logo: {
			"@type": "ImageObject",
			url: `${BASE_URL}/opengraph-image`,
		},
		description: locale === "fr"
			? "Serveur MCP open source pour la mémoire partagée, la messagerie et la gestion de tâches multi-agents Claude Code. 16 tables, 64 outils. Gratuit, auto-hébergé sur Convex."
			: "Open source shared memory, messaging, and task management MCP server for multi-agent Claude Code. 16 database tables, 64 MCP tools. Free, self-hosted on Convex.",
		sameAs: ["https://github.com/vantageos", "https://x.com/PerelloLaurent"],
	};
}

const webSiteSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"@id": `${BASE_URL}/#website`,
	name: "VantagePeers",
	url: BASE_URL,
	publisher: {
		"@id": `${BASE_URL}/#organization`,
	},
};

// Q&A pairs embedded in WebPage.mainEntity — FAQPage type is restricted to
// government/health sites since August 2023 and is not used here.
// Locale-aware: French content on /fr, English elsewhere.
const webPageContent = {
	en: {
		name: "VantagePeers — Shared Memory for Multi-Agent Claude Code",
		description: "Open source MCP server. 64 tools, 16 tables. Semantic memory, inter-agent messaging, task management. Free, self-hosted.",
		faq: [
			{ q: "Is VantagePeers free to use?", a: "Yes. VantagePeers is fully open source under the MIT license. It is free, self-hosted, and has no subscription fee." },
			{ q: "What is VantagePeers?", a: "VantagePeers is an open source MCP server that gives Claude Code agents shared memory, inter-agent messaging with read receipts, and task management. It connects multiple AI agents across machines via Convex cloud." },
			{ q: "How many MCP tools does VantagePeers provide?", a: "VantagePeers provides 64 MCP tools across 16 database tables, covering semantic memory recall, inter-agent messaging, task management, fix pattern knowledge base, GitHub issue tracking, business unit management, mandates, recurring tasks, missions, agent diary, component registry, and cross-machine coordination." },
			{ q: "What technology does VantagePeers run on?", a: "VantagePeers is built on Convex (a real-time database) with vector embeddings powered by @convex-dev/rag. It is self-hosted and free to run." },
			{ q: "How does VantagePeers compare to mem0 or Zep?", a: "VantagePeers replaces paid memory services like mem0 ($249/mo) and Zep ($475/mo) with a free, self-hosted alternative. Unlike claude-peers which is local-only, VantagePeers uses Convex cloud for cross-machine agent coordination." },
		],
	},
	fr: {
		name: "VantagePeers — Mémoire partagée pour agents Claude Code",
		description: "Serveur MCP open source. 64 outils, 16 tables. Mémoire sémantique, messagerie inter-agents, gestion de tâches. Gratuit, auto-hébergé.",
		faq: [
			{ q: "VantagePeers est-il gratuit ?", a: "Oui. VantagePeers est entièrement open source sous licence MIT. Il est gratuit, auto-hébergé, et sans abonnement." },
			{ q: "Qu'est-ce que VantagePeers ?", a: "VantagePeers est un serveur MCP open source qui donne aux agents Claude Code une mémoire partagée, une messagerie inter-agents avec accusés de réception, et une gestion de tâches. Il connecte plusieurs agents IA sur différentes machines via Convex cloud." },
			{ q: "Combien d'outils MCP VantagePeers fournit-il ?", a: "VantagePeers fournit 64 outils MCP répartis sur 16 tables de base de données : rappel de mémoire sémantique, messagerie inter-agents, gestion de tâches, base de connaissances de fix patterns, suivi d'issues GitHub, gestion d'unités d'affaires, mandats, tâches récurrentes, missions, journal d'agent, registre de composants, et coordination multi-machines." },
			{ q: "Sur quelle technologie fonctionne VantagePeers ?", a: "VantagePeers est construit sur Convex (une base de données temps réel) avec des embeddings vectoriels via @convex-dev/rag. Il est auto-hébergé et gratuit." },
			{ q: "Comment VantagePeers se compare-t-il à mem0 ou Zep ?", a: "VantagePeers remplace les services de mémoire payants comme mem0 (249$/mois) et Zep (475$/mois) par une alternative gratuite et auto-hébergée. Contrairement à claude-peers qui est local uniquement, VantagePeers utilise Convex cloud pour la coordination inter-machines." },
		],
	},
};

function getWebPageSchema(locale: string) {
	const content = locale === "fr" ? webPageContent.fr : webPageContent.en;
	const pageUrl = locale === "fr" ? `${BASE_URL}/fr` : BASE_URL;
	return {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"@id": `${pageUrl}#webpage`,
		name: content.name,
		description: content.description,
		url: pageUrl,
		inLanguage: locale === "fr" ? "fr" : "en",
		isPartOf: {
			"@id": `${BASE_URL}/#website`,
		},
		speakable: {
			"@type": "SpeakableSpecification",
			cssSelector: ["#hero h1", "#hero p"],
		},
		mainEntity: content.faq.map((item) => ({
			"@type": "Question",
			name: item.q,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.a,
			},
		})),
	};
}

function getSoftwareApplicationSchema(locale: string) {
	return {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		"@id": `${BASE_URL}/#software`,
		name: "VantagePeers",
		applicationCategory: "DeveloperApplication",
		operatingSystem: "Any",
		description: locale === "fr"
			? "Serveur MCP de mémoire partagée, messagerie et gestion de tâches pour agents Claude Code. Construit sur Convex avec embeddings vectoriels via @convex-dev/rag."
			: "Shared memory, messaging, and task management MCP server for multi-agent Claude Code. Built on Convex with vector embeddings via @convex-dev/rag.",
		url: BASE_URL,
		downloadUrl: "https://github.com/vantageos/vantage-peers",
		softwareVersion: "1.0.0",
		license: "https://opensource.org/licenses/MIT",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
			description: locale === "fr" ? "Gratuit, open source, auto-hébergé" : "Free, open source, self-hosted",
		},
		author: {
			"@id": `${BASE_URL}/#organization`,
		},
	};
}

function getFaqPageSchema(locale: string) {
	const content = locale === "fr" ? webPageContent.fr : webPageContent.en;
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"@id": `${locale === "fr" ? `${BASE_URL}/fr` : BASE_URL}#faqpage`,
		mainEntity: content.faq.map((item) => ({
			"@type": "Question",
			name: item.q,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.a,
			},
		})),
	};
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data — static literals only, no user input interpolated
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}

export function LandingStructuredData({ locale = "en" }: { locale?: string }) {
	return (
		<>
			<JsonLd data={getOrganizationSchema(locale)} />
			<JsonLd data={webSiteSchema} />
			<JsonLd data={getWebPageSchema(locale)} />
			<JsonLd data={getSoftwareApplicationSchema(locale)} />
			<JsonLd data={getFaqPageSchema(locale)} />
		</>
	);
}
