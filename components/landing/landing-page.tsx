"use client";

import { MotionConfig } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";
import { PeersFooter } from "@/components/landing/peers-footer";
import { PeersHeader } from "@/components/landing/peers-header";
import { PeersHero } from "@/components/landing/peers-hero";

// Below-fold sections: deferred to reduce TBT / main-thread blocking
const PeersProblem = dynamic(
	() =>
		import("@/components/landing/peers-problem").then((m) => ({
			default: m.PeersProblem,
		})),
	{ ssr: false },
);
const PeersFeatures = dynamic(
	() =>
		import("@/components/landing/peers-features").then((m) => ({
			default: m.PeersFeatures,
		})),
	{ ssr: false },
);
const PeersHowItWorks = dynamic(
	() =>
		import("@/components/landing/peers-how-it-works").then((m) => ({
			default: m.PeersHowItWorks,
		})),
	{ ssr: false },
);
const PeersComparison = dynamic(
	() =>
		import("@/components/landing/peers-comparison").then((m) => ({
			default: m.PeersComparison,
		})),
	{ ssr: false },
);
const PeersCode = dynamic(
	() =>
		import("@/components/landing/peers-code").then((m) => ({
			default: m.PeersCode,
		})),
	{ ssr: false },
);
const PeersPricing = dynamic(
	() =>
		import("@/components/landing/peers-pricing").then((m) => ({
			default: m.PeersPricing,
		})),
	{ ssr: false },
);
const PeersFaq = dynamic(
	() =>
		import("@/components/landing/peers-faq").then((m) => ({
			default: m.PeersFaq,
		})),
	{ ssr: false },
);
const PeersCta = dynamic(
	() =>
		import("@/components/landing/peers-cta").then((m) => ({
			default: m.PeersCta,
		})),
	{ ssr: false },
);

export type Locale = "en" | "fr";

interface LandingPageProps {
	initialLocale?: Locale;
}

export function LandingPage({ initialLocale = "en" }: LandingPageProps) {
	const [locale, setLocale] = useState<Locale>(initialLocale);

	return (
		<MotionConfig reducedMotion="user">
			<div className="min-h-screen bg-background overflow-x-hidden">
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-4xl"
				>
					{locale === "fr"
						? "Aller au contenu principal"
						: "Skip to main content"}
				</a>
				<PeersHeader locale={locale} onLocaleChange={setLocale} />
				<main id="main-content">
					<PeersHero locale={locale} />
					<PeersProblem locale={locale} />
					<PeersFeatures locale={locale} />
					<PeersHowItWorks locale={locale} />
					<PeersComparison locale={locale} />
					<PeersCode locale={locale} />
					<PeersPricing locale={locale} />
					<PeersFaq locale={locale} />
					<PeersCta locale={locale} />
				</main>
				<PeersFooter locale={locale} onLocaleChange={setLocale} />
			</div>
		</MotionConfig>
	);
}
