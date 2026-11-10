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
		title: "Terms of Service — VantagePeers Cloud",
		description: "The terms under which VantagePeers Cloud is provided.",
		alternates: {
			canonical: `${BASE_URL}${locale === "fr" ? "/fr" : ""}/terms`,
			languages: { en: "/terms", fr: "/fr/terms" },
		},
	};
}

// DRAFT. English only for now; the French route renders the same text.
// Every [TO VERIFY: ...] marker is an operator decision or an unread fact.
const content: LegalDocumentContent = {
	title: "Terms of Service",
	lastUpdated:
		"Draft, November 2026 [TO VERIFY: publication date once reviewed]",
	intro:
		"These terms govern your use of VantagePeers Cloud, the hosted multi-tenant service published by Perello Consulting / ElPi Corp. They do not apply to self-hosted VantagePeers, which is distributed under its own licence.",
	sections: [
		{
			heading: "The service",
			paragraphs: [
				"VantagePeers gives a team of AI agents shared memory, messages, tasks and missions. VantagePeers Cloud provides it as a hosted MCP server at https://mcp.vantagepeers.com/mcp, usable from Claude, ChatGPT, Claude Code, Codex and any other client that supports the Model Context Protocol.",
				"Plans and prices are shown on the pricing section of this website. [TO VERIFY: payment terms, billing period, renewal, refunds and taxes].",
			],
		},
		{
			heading: "Accounts and organisations",
			items: [
				"You sign in with an account managed by Clerk. Access is granted per organisation: your organisation must be provisioned by us before any connection is accepted.",
				"Within an organisation, members hold a role (admin or member). An admin can erase any row of the organisation.",
				"Each assistant you connect acts as its own agent, under a name you choose. You are responsible for what the agents and people you connect do in your organisation.",
				"Keep your credentials and tokens confidential, and tell us without delay if you believe one has been exposed. [TO VERIFY: confirm this obligation].",
				"[TO VERIFY: minimum age, and whether accounts may be opened on behalf of a company only].",
			],
		},
		{
			heading: "Acceptable use",
			paragraphs: [
				"[TO VERIFY: the following list is a proposed draft with no source in the system; confirm or amend it].",
			],
			items: [
				"Do not use the service to store or exchange unlawful content, or content that infringes the rights of others.",
				"Do not try to access another organisation's data, to bypass the access controls, or to probe the service's security without our written agreement.",
				"Do not overload the service or use it in a way that degrades it for other customers. [TO VERIFY: fair-use quotas per plan].",
				"Do not store secrets you are not allowed to share with the agents of your organisation.",
			],
		},
		{
			heading: "Your data",
			paragraphs: [
				"You keep ownership of the content you and your agents store in VantagePeers Cloud. We process it only to provide the service, as described in the Privacy Policy. [TO VERIFY: ownership clause and any licence you grant us to host and process the content].",
				"You can export a namespace with the export_okf_bundle tool and erase rows with the erase_row tool at any time.",
			],
		},
		{
			heading: "Third-party clients",
			paragraphs: [
				"The AI assistants you connect are provided by third parties under their own terms. We are not responsible for what those assistants do with the data they read from VantagePeers, nor for changes to their plans or features that affect their access to the service. [TO VERIFY: confirm this clause].",
			],
		},
		{
			heading: "Availability",
			paragraphs: [
				"We aim to keep the service available but do not guarantee uninterrupted operation, except where an Enterprise agreement includes a custom service-level agreement. [TO VERIFY: availability commitment and maintenance notice for the Solo and Team plans].",
			],
		},
		{
			heading: "Suspension and termination",
			items: [
				"You may stop using the service at any time. [TO VERIFY: cancellation procedure and notice].",
				"We may suspend or terminate access that breaches these terms. [TO VERIFY: notice period and grounds].",
				"After termination, your data is handled as described in the Privacy Policy. [TO VERIFY: retention and deletion period after termination].",
			],
		},
		{
			heading: "Liability",
			paragraphs: [
				"[TO VERIFY: warranty disclaimer, liability cap and its amount, and exclusions; these are legal decisions and no source exists in the system].",
			],
		},
		{
			heading: "Changes to these terms",
			paragraphs: [
				"We may update these terms. The date at the top of this page indicates the last revision. [TO VERIFY: how customers are notified, and from when a change applies].",
			],
		},
		{
			heading: "Governing law",
			paragraphs: [
				"[TO VERIFY: governing law and competent courts for the service; the website's Legal Notice states French law and the courts of France for the website].",
			],
		},
		{
			heading: "Contact",
			paragraphs: [
				"Perello Consulting / ElPi Corp, laurent@perello.fr. [TO VERIFY: postal address]. For help with the service, see the Support page.",
			],
		},
	],
};

export default async function TermsPage({ params }: Props) {
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
