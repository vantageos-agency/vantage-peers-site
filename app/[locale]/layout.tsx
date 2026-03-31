import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { LandingStructuredData } from "@/components/landing/structured-data";
import { ThemeProvider } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://vantagepeers.com";

type Locale = "en" | "fr";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

type Props = {
	params: Promise<{ locale: string }>;
	children: React.ReactNode;
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;

	const meta: Record<
		string,
		{ title: string; description: string; ogTitle: string; ogDesc: string }
	> = {
		en: {
			title: "VantagePeers \u2014 Shared Memory for Multi-Agent Claude Code",
			description:
				"Open source memory, messaging, and task management MCP server. 13 tables, 45 tools. Free, self-hosted on Convex.",
			ogTitle: "VantagePeers \u2014 Shared Memory for Multi-Agent Claude Code",
			ogDesc:
				"Open source MCP server. 45 tools, 13 tables. Semantic memory, inter-agent messaging, task management. Free, self-hosted.",
		},
		fr: {
			title:
				"VantagePeers \u2014 M\u00e9moire partag\u00e9e pour agents Claude Code",
			description:
				"Serveur MCP open source pour la m\u00e9moire, la messagerie et la gestion de t\u00e2ches multi-agents. 13 tables, 45 outils. Gratuit, auto-h\u00e9berg\u00e9 sur Convex.",
			ogTitle:
				"VantagePeers \u2014 M\u00e9moire partag\u00e9e pour agents Claude Code",
			ogDesc:
				"Serveur MCP open source. 45 outils, 13 tables. M\u00e9moire s\u00e9mantique, messagerie inter-agents, gestion de t\u00e2ches. Gratuit.",
		},
	};

	const m = meta[locale] || meta.en;
	const canonicalUrl = locale === "en" ? BASE_URL : `${BASE_URL}/fr`;

	return {
		metadataBase: new URL(BASE_URL),
		title: m.title,
		description: m.description,
		alternates: {
			canonical: canonicalUrl,
			languages: {
				en: BASE_URL,
				fr: `${BASE_URL}/fr`,
				"x-default": BASE_URL,
			},
		},
		openGraph: {
			title: m.ogTitle,
			description: m.ogDesc,
			type: "website",
			url: canonicalUrl,
			images: [
				{
					url: "/opengraph-image",
					width: 1200,
					height: 630,
					alt:
						locale === "fr"
							? "VantagePeers - Mémoire partagée pour essaims d’agents IA"
							: "VantagePeers - Shared Memory for AI Agent Swarms",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: m.ogTitle,
			description: m.ogDesc,
			images: ["/opengraph-image"],
		},
		icons: {
			apple: "/apple-touch-icon.png",
		},
		other: {
			"theme-color": "#0a0a0a",
		},
	};
}

export default async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params;

	if (!routing.locales.includes(locale as Locale)) {
		notFound();
	}

	setRequestLocale(locale);

	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<head>
				<meta name="theme-color" content="#0a0a0a" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<LandingStructuredData locale={locale} />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<a
						href="#main-content"
						className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-primary-foreground focus:font-medium focus:outline-none focus:ring-2 focus:ring-ring"
					>
						{locale === "fr" ? "Aller au contenu principal" : "Skip to main content"}
					</a>
					<noscript>
						<style>{`
							[data-framer-motion-initial], .motion-safe\:opacity-0 { opacity: 1 !important; transform: none !important; }
						`}</style>
					</noscript>
					<NextIntlClientProvider messages={messages}>
						{children}
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
