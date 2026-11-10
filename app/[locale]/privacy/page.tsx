import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import {
	LegalDocument,
	type LegalDocumentContent,
} from "@/components/legal/legal-document";

type Props = {
	params: Promise<{ locale: string }>;
};

const BASE_URL = "https://www.vantagepeers.com";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	return {
		title: "Privacy Policy — VantagePeers Cloud",
		description:
			"How VantagePeers Cloud collects, uses, stores, shares, retains and deletes data.",
		alternates: {
			canonical: `${BASE_URL}${locale === "fr" ? "/fr" : ""}/privacy`,
			languages: { en: "/privacy", fr: "/fr/privacy" },
		},
	};
}

// DRAFT. English only for now; the French route renders the same text.
// Every [TO VERIFY: ...] marker is an operator decision or an unread fact.
const content: LegalDocumentContent = {
	title: "Privacy Policy",
	lastUpdated:
		"Draft, November 2026 [TO VERIFY: publication date once reviewed]",
	intro:
		"This policy covers VantagePeers Cloud, the hosted multi-tenant service reached at https://mcp.vantagepeers.com/mcp from Claude, ChatGPT, Claude Code, Codex or any other client that speaks the Model Context Protocol (MCP), and this website. It does not cover a self-hosted VantagePeers deployment: if you run VantagePeers on your own infrastructure, the data stays on that infrastructure and you are its operator.",
	sections: [
		{
			heading: "Who is responsible for your data",
			paragraphs: [
				"VantagePeers Cloud is published by VANTAGE FORGE SARLAU (société à responsabilité limitée à associé unique), capital 10 000 MAD; registered office Oasis Offices Latitudes, Route de l'Oasis, Bureau 304, Maarif, Casablanca, Morocco; RC 749415, Tribunal de commerce de Casablanca; ICE 004026362000006; IF 73376411; TP 34754054; managing director Laurent Perello.",
				"Contact: laurent@perello.fr.",
			],
		},
		{
			heading: "Data we collect",
			paragraphs: [
				"Account and organisation data. Sign-in is handled by Clerk. On our side we store your Clerk user identifier, the identifier and name of your organisation, and your role in it (admin or member). Your email address is stored by us only when an operator invites a specific person to a personal agent, so the invitation can be matched to that person's verified email when they join. Your name, email address and sign-in credentials are held by Clerk. Clerk collects your email address and a password (both required), and optionally your first and last name; you can also sign in with Google.",
				"Content you and your agents write. Through the MCP tools you, the people in your organisation and the AI agents you connect can store: memories (including episodes), messages and their read receipts, tasks, missions, recurring tasks, briefing notes, diary entries, agent profiles, mandates, fix patterns, issues, debate rooms, and documents you upload for ingestion into your knowledge base. Each item records which person or agent wrote it and when.",
				"Connection data. When your AI client connects, it registers an OAuth client with us (a client identifier, its display name and redirect addresses; its secret is stored only as a SHA-256 hash). Access and refresh tokens are stored only as hashes, together with the rights they carry and their expiry. Changes to an organisation's access rights are recorded in an audit log.",
				"Usage data. For each organisation, each caller and each tool, we keep a counter of calls and the time of the first and last call.",
				"Server logs. The MCP server writes log lines at startup and when an operation fails. A failure line records the tool, the namespace or channel, the author name, the size of the content and the error, not the content itself. Logs of the MCP server are kept by Railway for 7 days. The database keeps only a short history of recent function logs.",
				"Website. This website counts visits with Plausible Analytics, which sets no cookie and does not store IP addresses. The only cookie this website sets is NEXT_LOCALE, which remembers your language. Signing in to VantagePeers Cloud happens on Clerk's pages, which set Clerk's own session cookies.",
			],
		},
		{
			heading: "How we use it",
			items: [
				"To provide the service: store your content, return it to the members and agents of your organisation, and search it by meaning and by keyword.",
				"To authenticate each request and to enforce that a connection only reads and writes what its organisation and its rights allow.",
				"To operate the service: usage counters per tool and per caller. [TO VERIFY: the purposes of the usage counters (quota, billing, support, product statistics)].",
				"We do not sell or rent your data, and we do not share it with third parties for marketing purposes.",
				"Your content is not used to train AI models. [TO VERIFY: confirm this commitment for VantagePeers Cloud and for the embeddings provider's own terms].",
			],
		},
		{
			heading: "Where it is stored and who processes it",
			paragraphs: [
				"We use the following providers to run VantagePeers Cloud. Each receives only what its role requires.",
			],
			items: [
				"Convex: the database, file storage and server functions. It stores all the data listed above. Convex runs on Amazon Web Services, encrypts data at rest with 256-bit AES and in transit with TLS, and is SOC 2 Type 2 compliant. [TO VERIFY: data region of the production deployment, shown only in the Convex dashboard].",
				"Railway: hosts the MCP server at mcp.vantagepeers.com, in its Amsterdam (Netherlands) region. Every tool request and response passes through it; it stores none of your content, only the server logs described above.",
				"Clerk (Clerk, Inc., United States): sign-in, sessions and organisation membership. It holds your account details, primarily in Google Cloud and Cloudflare data centres.",
				"OpenAI, reached directly or through Vercel AI Gateway: the text of memories and of ingested document chunks is sent to OpenAI's text-embedding-3-small model to compute the vectors used for search. OpenAI states that data sent to its API is not used to train its models, and keeps abuse-monitoring logs for up to 30 days. Vercel AI Gateway states that it does not retain prompts or outputs. [TO VERIFY: which of the two paths production uses; it is decided by the embeddings key set on the Convex production deployment, readable only in the Convex dashboard].",
				"Vercel: hosts this website and serves the DNS of vantagepeers.com.",
				"Plausible: visit statistics for this website, processed and stored in the European Union.",
				"Transfers outside the European Union: Clerk relies on the EU-U.S. Data Privacy Framework, with the EU Standard Contractual Clauses as fallback; Vercel relies on the EU Standard Contractual Clauses. The data processing agreements of Clerk, Vercel and Plausible form part of their terms. [TO VERIFY: data processing agreements signed with Railway (signature required) and Convex and OpenAI, and their transfer safeguards].",
			],
		},
		{
			heading: "Your AI client",
			paragraphs: [
				"The assistant you connect (for example Claude or ChatGPT) is operated by its own provider, not by us. What it sends to VantagePeers and what it does with the answers is governed by that provider's terms and privacy policy.",
			],
		},
		{
			heading: "Security",
			items: [
				"Each organisation's data is isolated: a connection is resolved to its verified organisation and cannot read or write another organisation's data.",
				"Client secrets and tokens are stored as SHA-256 hashes, never in clear.",
				"Connections to the service use HTTPS. The database and file storage are encrypted at rest by Convex.",
			],
		},
		{
			heading: "How long we keep it",
			items: [
				"Your content is kept until it is deleted by you or by your organisation. The service has no automatic expiry for memories, messages, tasks, missions or the other content listed above.",
				"Short-lived records are purged automatically every hour after they expire: sign-in codes, webhook delivery records and upload tickets.",
				"An access token issued through the standard sign-in lasts one hour and a refresh token 30 days; an access token issued to a provisioned agent seat lasts 7 days.",
				"After your organisation's subscription ends: [TO VERIFY: retention period after termination, and when data is deleted].",
				"Backups: [TO VERIFY: whether automatic backups are enabled on the production deployment, shown only in the Convex dashboard; Convex keeps daily backups 7 days and weekly backups 14 days].",
			],
		},
		{
			heading: "Deleting your data",
			items: [
				"The erase_row tool permanently deletes one row (and, for a memory, its search entry) in: memories, messages, missions, tasks, recurring tasks, briefing notes, diary entries, debate rooms, issues, business units and debate templates. Dependent rows (read receipts, turns, participants) are deleted with it. An organisation admin can erase any row of the organisation; the person or agent that wrote a row can erase it.",
				"The erase_memory tool permanently removes a specific text, such as a leaked credential, from a memory and from its search entry, while keeping the rest of the memory.",
				"For anything these tools do not cover (your account, your organisation, uploaded files, agent profiles, usage counters, connection records), write to laurent@perello.fr. [TO VERIFY: the deletion procedure and its time limit].",
			],
		},
		{
			heading: "Your rights",
			paragraphs: [
				"Under the General Data Protection Regulation (GDPR), you have the right to access your personal data, rectify it, request its erasure, restrict or object to its processing, and receive it in a portable form. The export_okf_bundle tool exports the memories, briefing notes and tasks of a namespace as a downloadable bundle. To exercise any right, contact laurent@perello.fr.",
				"Legal basis for processing: [TO VERIFY: legal basis per purpose (contract, legitimate interest)]. You may lodge a complaint with a supervisory authority: [TO VERIFY: competent authority, for example the CNIL in France].",
				"Minimum age: [TO VERIFY: minimum age to use the service].",
			],
		},
		{
			heading: "Changes to this policy",
			paragraphs: [
				"We may update this policy. The date at the top of this page indicates the last revision. [TO VERIFY: how users are notified of material changes].",
			],
		},
		{
			heading: "Contact",
			paragraphs: [
				"Privacy questions and requests: laurent@perello.fr. Other questions: see the Support page.",
			],
		},
	],
};

export default async function PrivacyPage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<LegalDocument
			content={content}
			backHref={locale === "fr" ? "/fr" : "/"}
			backLabel={locale === "fr" ? "Retour" : "Back"}
		/>
	);
}
