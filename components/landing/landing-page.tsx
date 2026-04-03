"use client";

import { MotionConfig } from "framer-motion";
import { useState } from "react";
import { PeersCode } from "@/components/landing/peers-code";
import { PeersComparison } from "@/components/landing/peers-comparison";
import { PeersCta } from "@/components/landing/peers-cta";
import { PeersFaq } from "@/components/landing/peers-faq";
import { PeersFeatures } from "@/components/landing/peers-features";
import { PeersFooter } from "@/components/landing/peers-footer";
import { PeersHeader } from "@/components/landing/peers-header";
import { PeersHero } from "@/components/landing/peers-hero";
import { PeersHowItWorks } from "@/components/landing/peers-how-it-works";
import { PeersPricing } from "@/components/landing/peers-pricing";
import { PeersProblem } from "@/components/landing/peers-problem";

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
					{locale === "fr" ? "Aller au contenu principal" : "Skip to main content"}
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
