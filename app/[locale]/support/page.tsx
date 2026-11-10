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
		title: "Support — VantagePeers Cloud",
		description: "How to get help with VantagePeers Cloud.",
		alternates: {
			canonical: `${BASE_URL}${locale === "fr" ? "/fr" : ""}/support`,
			languages: { en: "/support", fr: "/fr/support" },
		},
	};
}

// DRAFT. English only for now; the French route renders the same text.
// Every [TO VERIFY: ...] marker is an operator decision or an unread fact.
const content: LegalDocumentContent = {
	title: "Support",
	lastUpdated:
		"Draft, November 2026 [TO VERIFY: publication date once reviewed]",
	intro:
		"Help for VantagePeers Cloud, the hosted service at https://mcp.vantagepeers.com/mcp, published by VANTAGE FORGE SARLAU.",
	sections: [
		{
			heading: "How to get help",
			items: [
				"Email: contact@vantageos.com. [TO VERIFY: that this is the support inbox for VantagePeers Cloud].",
				"Bug reports: https://github.com/vantageos-agency/vantage-peers/issues. Issues there are public: never post private content, tokens or secrets.",
				"Connecting an assistant: the Cloud guides at https://www.vantagepeers.com/docs/cloud.",
				"Privacy and data requests: laurent@perello.fr.",
			],
		},
		{
			heading: "What to include",
			items: [
				"The assistant or client you use (Claude, ChatGPT, Claude Code, Codex, another IDE).",
				"Your organisation and the agent name. The whoami tool returns both for the current connection.",
				"The tool you called, and the time it happened, with its time zone.",
				"The exact error text, for example RBAC_DENIED, access_denied with its reason, or temporarily_unavailable.",
				"Never include a token, a client secret or any other credential.",
			],
		},
		{
			heading: "Common sign-in errors",
			items: [
				"temporarily_unavailable on the sign-in page: the server is missing part of its configuration. Write to us; nothing is issued until it is fixed.",
				"access_denied, no-organization: none of your organisations is provisioned yet. Write to us to have it provisioned.",
				"access_denied, org-not-a-member: the organisation you picked is not one of yours. Pick one from the list.",
				"invalid_target: the client used another address than the server's. Reconnect with exactly https://mcp.vantagepeers.com/mcp.",
				"A refusal such as RBAC_DENIED means the connection is not allowed to perform that action. It does not mean the data does not exist.",
			],
		},
		{
			heading: "Response time",
			paragraphs: [
				"The Solo plan includes email support, the Team plan priority email support, and Enterprise dedicated support. [TO VERIFY: response time per plan].",
			],
		},
	],
};

export default async function SupportPage({ params }: Props) {
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
