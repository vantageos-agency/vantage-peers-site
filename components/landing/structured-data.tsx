const BASE_URL = "https://vantagepeers.com";

// JSON-LD injection via dangerouslySetInnerHTML is the standard pattern for
// server-rendered structured data. No user input is interpolated here — all
// values are static literals defined in this file.

const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"@id": `${BASE_URL}/#organization`,
	name: "VantagePeers",
	url: BASE_URL,
	logo: {
		"@type": "ImageObject",
		url: `${BASE_URL}/opengraph-image`,
	},
	description:
		"Open source shared memory, messaging, and task management MCP server for multi-agent Claude Code. 10 database tables, 35 MCP tools. Free, self-hosted on Convex.",
	sameAs: ["https://github.com/vantageos/vantage-peers"],
};

const softwareApplicationSchema = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	"@id": `${BASE_URL}/#software`,
	name: "VantagePeers",
	applicationCategory: "DeveloperApplication",
	operatingSystem: "Any",
	description:
		"Shared memory, messaging, and task management MCP server for multi-agent Claude Code. Built on Convex with vector embeddings via @convex-dev/rag.",
	url: BASE_URL,
	downloadUrl: "https://github.com/vantageos/vantage-peers",
	softwareVersion: "1.0.0",
	license: "https://opensource.org/licenses/MIT",
	offers: {
		"@type": "Offer",
		price: "0",
		priceCurrency: "USD",
		description: "Free, open source, self-hosted",
	},
	author: {
		"@id": `${BASE_URL}/#organization`,
	},
};

// NOTE: FAQPage rich results are restricted to government and health sites as of
// August 2023. Google will parse this schema but will not surface rich results
// for non-eligible sites. It is included here per explicit project requirement
// for knowledge graph entity linking and LLM-readable structured data.
const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	"@id": `${BASE_URL}/#faq`,
	mainEntity: [
		{
			"@type": "Question",
			name: "What is VantagePeers?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "VantagePeers is an open source MCP server that gives Claude Code agents shared memory, inter-agent messaging with read receipts, and task management. It connects multiple AI agents across machines via Convex cloud.",
			},
		},
		{
			"@type": "Question",
			name: "How many MCP tools does VantagePeers provide?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "VantagePeers provides 35 MCP tools across 10 database tables, covering semantic memory recall, inter-agent messaging, task management, recurring tasks, missions, agent diary, and cross-machine coordination.",
			},
		},
		{
			"@type": "Question",
			name: "What technology does VantagePeers run on?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "VantagePeers is built on Convex (a real-time database) with vector embeddings powered by @convex-dev/rag. It is self-hosted and free to run.",
			},
		},
		{
			"@type": "Question",
			name: "Is VantagePeers free to use?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Yes. VantagePeers is fully open source under the MIT license. It is free, self-hosted, and has no subscription fee.",
			},
		},
		{
			"@type": "Question",
			name: "How does VantagePeers compare to mem0 or Zep?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "VantagePeers replaces paid memory services like mem0 ($249/mo) and Zep ($475/mo) with a free, self-hosted alternative. Unlike claude-peers which is local-only, VantagePeers uses Convex cloud for cross-machine agent coordination.",
			},
		},
	],
};

function JsonLd({ data }: { data: Record<string, unknown> }) {
	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data — static literals only, no user input interpolated
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}

export function LandingStructuredData() {
	return (
		<>
			<JsonLd data={organizationSchema} />
			<JsonLd data={softwareApplicationSchema} />
			<JsonLd data={faqSchema} />
		</>
	);
}
