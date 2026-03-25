"use client";

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
import { PeersProblem } from "@/components/landing/peers-problem";

export type Locale = "en" | "fr";

interface LandingPageProps {
	initialLocale?: Locale;
}

export function LandingPage({ initialLocale = "en" }: LandingPageProps) {
	const [locale, setLocale] = useState<Locale>(initialLocale);

	return (
		<div className="min-h-screen bg-background overflow-x-hidden">
			<PeersHeader locale={locale} onLocaleChange={setLocale} />
			<main>
				<PeersHero locale={locale} />
				<PeersProblem locale={locale} />
				<PeersFeatures locale={locale} />
				<PeersHowItWorks locale={locale} />
				<PeersComparison locale={locale} />
				<PeersCode locale={locale} />
				<PeersFaq locale={locale} />
				<PeersCta locale={locale} />
			</main>
			<PeersFooter locale={locale} onLocaleChange={setLocale} />
		</div>
	);
}
