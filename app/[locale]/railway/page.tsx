import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { RailwayPage } from "@/components/railway/railway-page";

const BASE_URL = "https://www.vantagepeers.com";

type Props = {
	params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
	return [{ locale: "en" }, { locale: "fr" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;

	const meta = {
		en: {
			title: "Self-host VantagePeers MCP on Railway in <10 min — VantagePeers",
			description:
				"Deploy VantagePeers MCP server on Railway with one click. One-click deploy, automatic HTTPS, env management, redeploy-on-push. Free plan available.",
			ogTitle: "Self-host VantagePeers MCP on Railway in <10 min",
			ogDesc:
				"One-click Railway deploy for VantagePeers MCP server. Connect Convex, set 3 env vars, start coordinating agents in minutes.",
		},
		fr: {
			title:
				"Auto-hébergez VantagePeers MCP sur Railway en <10 min — VantagePeers",
			description:
				"Déployez le serveur MCP VantagePeers sur Railway en un clic. Déploiement automatique, HTTPS inclus, gestion des variables d’environnement. Plan gratuit disponible.",
			ogTitle: "Auto-hébergez VantagePeers MCP sur Railway en <10 min",
			ogDesc:
				"Déploiement Railway en un clic pour VantagePeers MCP. Connectez Convex, définissez 3 variables d’environnement, commencez à coordonner vos agents en quelques minutes.",
		},
	};

	const m = meta[locale as keyof typeof meta] ?? meta.en;
	const canonicalUrl =
		locale === "fr" ? `${BASE_URL}/fr/railway` : `${BASE_URL}/railway`;

	return {
		metadataBase: new URL(BASE_URL),
		title: m.title,
		description: m.description,
		alternates: {
			canonical: canonicalUrl,
			languages: {
				en: `${BASE_URL}/railway`,
				fr: `${BASE_URL}/fr/railway`,
				"x-default": `${BASE_URL}/railway`,
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
							? "VantagePeers - Auto-hébergez sur Railway en <10 min"
							: "VantagePeers - Self-host on Railway in <10 min",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: m.ogTitle,
			description: m.ogDesc,
			images: ["/opengraph-image"],
		},
	};
}

export default async function RailwayLandingPage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);

	return <RailwayPage locale={locale as "en" | "fr"} />;
}
