"use client";

import { motion } from "framer-motion";
import { Check, Github } from "lucide-react";
import { PeersCompareTracks } from "./peers-compare-tracks";
import { PeersPricingCloud } from "./peers-pricing-cloud";
import { PeersPricingFaq } from "./peers-pricing-faq";

interface PricingTier {
	name: string;
	price: string;
	period: string;
	description: string;
	features: string[];
	cta: string;
	ctaHref: string;
	highlight: boolean;
	badge?: string;
}

interface PricingContent {
	title: string;
	subtitle: string;
	selfHostedLabel: string;
	selfHostedSubtitle: string;
	tiers: PricingTier[];
	sponsor: string;
}

const content: Record<"en" | "fr", PricingContent> = {
	en: {
		title: "Two tracks. One mission.",
		subtitle: "Self-host for control. Cloud for speed.",
		selfHostedLabel: "Self-Hosted",
		selfHostedSubtitle: "Your Convex. Your data. Full control.",
		tiers: [
			{
				name: "Self-Hosted",
				price: "Free",
				period: "forever",
				description: "Full VantagePeers. Your Convex. Your data.",
				features: [
					"82 MCP tools, 20 tables",
					"Semantic memory + RAG search",
					"Cross-machine messaging",
					"Task coordination + missions",
					"Community support (GitHub Issues)",
				],
				cta: "Get Started",
				ctaHref: "https://github.com/vantageos-agency/vantage-peers",
				highlight: false,
			},
			{
				name: "Railway 1-click",
				price: "Free",
				period: "forever",
				description: "Deploy in 2 minutes. No terminal needed.",
				features: [
					"One-click Railway deploy",
					"Full VantagePeers, your account",
					"Automatic environment config",
					"No Convex CLI knowledge needed",
					"Community support (GitHub Issues)",
				],
				cta: "Deploy on Railway",
				ctaHref: "https://github.com/vantageos-agency/vantage-peers#deploy",
				highlight: false,
			},
			{
				name: "QuickStart",
				price: "€290",
				period: "one-time",
				description: "We set it up for you. Running in 1 hour.",
				features: [
					"Everything in Self-Hosted",
					"1h guided setup call",
					"Deploy to your Convex account",
					"3 agents configured + tested",
					"Email support for 1 year",
				],
				cta: "Book a Call",
				ctaHref: "mailto:contact@vantageos.com?subject=QuickStart",
				highlight: true,
				badge: "Most popular",
			},
			{
				name: "Pro Support",
				price: "€99",
				period: "/year",
				description: "Priority help when you need it.",
				features: [
					"Everything in Self-Hosted",
					"24h priority response time",
					"Direct support channel",
					"Schema review + optimization",
					"Upgrade assistance",
				],
				cta: "Contact Us",
				ctaHref: "mailto:contact@vantageos.com?subject=Pro%20Support",
				highlight: false,
			},
		],
		sponsor: "Support the project on GitHub Sponsors",
	},
	fr: {
		title: "Deux tracks. Une mission.",
		subtitle: "Auto-hébergez pour le contrôle. Cloud pour la rapidité.",
		selfHostedLabel: "Auto-hébergé",
		selfHostedSubtitle: "Votre Convex. Vos données. Contrôle total.",
		tiers: [
			{
				name: "Auto-hébergé",
				price: "Gratuit",
				period: "pour toujours",
				description: "VantagePeers complet. Votre Convex. Vos données.",
				features: [
					"82 outils MCP, 20 tables",
					"Mémoire sémantique + recherche RAG",
					"Messagerie cross-machine",
					"Coordination de tâches + missions",
					"Support communauté (GitHub Issues)",
				],
				cta: "Commencer",
				ctaHref: "https://github.com/vantageos-agency/vantage-peers",
				highlight: false,
			},
			{
				name: "Railway 1-clic",
				price: "Gratuit",
				period: "pour toujours",
				description: "Déployé en 2 minutes. Sans terminal.",
				features: [
					"Déploiement Railway en un clic",
					"VantagePeers complet, votre compte",
					"Configuration d'environnement automatique",
					"Aucune connaissance Convex CLI requise",
					"Support communauté (GitHub Issues)",
				],
				cta: "Déployer sur Railway",
				ctaHref: "https://github.com/vantageos-agency/vantage-peers#deploy",
				highlight: false,
			},
			{
				name: "QuickStart",
				price: "290€",
				period: "unique",
				description: "On configure pour vous. Opérationnel en 1h.",
				features: [
					"Tout ce qui est dans Auto-hébergé",
					"Appel de configuration guidé 1h",
					"Déploiement sur votre compte Convex",
					"3 agents configurés + testés",
					"Support email pendant 1 an",
				],
				cta: "Réserver un appel",
				ctaHref: "mailto:contact@vantageos.com?subject=QuickStart",
				highlight: true,
				badge: "Le plus populaire",
			},
			{
				name: "Support Pro",
				price: "99€",
				period: "/an",
				description: "Aide prioritaire quand vous en avez besoin.",
				features: [
					"Tout ce qui est dans Auto-hébergé",
					"Temps de réponse prioritaire 24h",
					"Canal de support direct",
					"Revue + optimisation du schéma",
					"Assistance aux mises à jour",
				],
				cta: "Nous contacter",
				ctaHref: "mailto:contact@vantageos.com?subject=Support%20Pro",
				highlight: false,
			},
		],
		sponsor: "Soutenez le projet sur GitHub Sponsors",
	},
};

interface PeersPricingProps {
	locale: "en" | "fr";
}

export function PeersPricing({ locale }: PeersPricingProps) {
	const t = content[locale];

	return (
		<section id="pricing" className="py-16 md:py-24">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center max-w-3xl mx-auto mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
						{t.title}
					</h2>
					<p className="text-lg text-muted-foreground">{t.subtitle}</p>
				</motion.div>

				<motion.div
					className="mb-8"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<h3 className="text-2xl font-bold tracking-tight mb-2">
						{t.selfHostedLabel}
					</h3>
					<p className="text-muted-foreground">{t.selfHostedSubtitle}</p>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
					{t.tiers.map((tier, index) => (
						<motion.div
							key={tier.name}
							className={`rounded-2xl border p-6 flex flex-col ${
								tier.highlight
									? "border-chart-1 bg-chart-1/5 shadow-lg"
									: "border-border bg-card"
							}`}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
						>
							<div className="mb-6">
								{tier.badge ? (
									<span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-chart-1/15 text-chart-2 mb-3">
										{tier.badge}
									</span>
								) : null}
								<h4 className="text-xl font-semibold mb-2">{tier.name}</h4>
								<div className="flex items-baseline gap-1 mb-2">
									<span className="text-3xl font-bold">{tier.price}</span>
									<span className="text-muted-foreground text-sm">
										{tier.period}
									</span>
								</div>
								<p className="text-muted-foreground text-sm">
									{tier.description}
								</p>
							</div>

							<ul className="space-y-3 mb-8 flex-1">
								{tier.features.map((feature) => (
									<li key={feature} className="flex items-start gap-2 text-sm">
										<Check
											className="size-4 text-chart-1 shrink-0 mt-0.5"
											aria-hidden="true"
										/>
										<span>{feature}</span>
									</li>
								))}
							</ul>

							<a
								href={tier.ctaHref}
								className={`inline-flex items-center justify-center rounded-4xl font-medium min-h-[44px] px-6 transition-colors ${
									tier.highlight
										? "bg-primary text-primary-foreground hover:bg-primary/90"
										: "bg-muted text-foreground hover:bg-muted/80"
								}`}
							>
								{tier.cta}
							</a>
						</motion.div>
					))}
				</div>

				<PeersPricingCloud locale={locale} />
				<PeersCompareTracks locale={locale} />
				<PeersPricingFaq locale={locale} />

				<motion.div
					className="text-center mt-12"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<a
						href="https://github.com/sponsors/vantageos"
						className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
					>
						<Github className="size-4" aria-hidden="true" />
						{t.sponsor}
					</a>
				</motion.div>
			</div>
		</section>
	);
}
