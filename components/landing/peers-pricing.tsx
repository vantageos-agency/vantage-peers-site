"use client";

import { motion } from "framer-motion";
import { Check, Github } from "lucide-react";

const content = {
	en: {
		title: "Simple pricing. Free to start.",
		subtitle:
			"Self-host for free. Pay only if you want hands-on help.",
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
					"Fix patterns KB",
					"GitHub issue tracking",
					"Community support (GitHub Issues)",
				],
				cta: "Get Started",
				ctaHref: "https://github.com/vantageos-agency/vantage-peers",
				highlight: false,
			},
			{
				name: "QuickStart",
				price: "\u20ac290",
				period: "one-time",
				description: "We set it up for you. 1-hour guided call.",
				features: [
					"Everything in Self-Hosted",
					"1h guided setup call",
					"Deploy to your Convex account",
					"3 agents configured",
					"MCP server wired to Claude Code",
					"Email support for 1 week",
				],
				cta: "Book a Call",
				ctaHref: "mailto:contact@vantageos.com?subject=QuickStart",
				highlight: true,
			},
			{
				name: "Pro Support",
				price: "\u20ac49",
				period: "/month",
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
		title: "Tarifs simples. Gratuit pour commencer.",
		subtitle:
			"Auto-h\u00e9bergez gratuitement. Payez uniquement si vous voulez de l\u2019aide.",
		tiers: [
			{
				name: "Auto-h\u00e9berg\u00e9",
				price: "Gratuit",
				period: "pour toujours",
				description: "VantagePeers complet. Votre Convex. Vos donn\u00e9es.",
				features: [
					"82 outils MCP, 20 tables",
					"M\u00e9moire s\u00e9mantique + recherche RAG",
					"Messagerie cross-machine",
					"Coordination de t\u00e2ches + missions",
					"Base de fix patterns",
					"Suivi d\u2019issues GitHub",
					"Support communaut\u00e9 (GitHub Issues)",
				],
				cta: "Commencer",
				ctaHref: "https://github.com/vantageos-agency/vantage-peers",
				highlight: false,
			},
			{
				name: "QuickStart",
				price: "290\u20ac",
				period: "unique",
				description: "On configure pour vous. Appel guid\u00e9 d\u20191h.",
				features: [
					"Tout ce qui est dans Auto-h\u00e9berg\u00e9",
					"Appel de configuration guid\u00e9 d\u20191h",
					"D\u00e9ploiement sur votre compte Convex",
					"3 agents configur\u00e9s",
					"Serveur MCP connect\u00e9 \u00e0 Claude Code",
					"Support email pendant 1 semaine",
				],
				cta: "R\u00e9server un appel",
				ctaHref: "mailto:contact@vantageos.com?subject=QuickStart",
				highlight: true,
			},
			{
				name: "Support Pro",
				price: "49\u20ac",
				period: "/mois",
				description: "Aide prioritaire quand vous en avez besoin.",
				features: [
					"Tout ce qui est dans Auto-h\u00e9berg\u00e9",
					"Temps de r\u00e9ponse prioritaire 24h",
					"Canal de support direct",
					"Revue + optimisation du sch\u00e9ma",
					"Assistance aux mises \u00e0 jour",
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

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
								<h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
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
										<Check className="size-4 text-chart-1 shrink-0 mt-0.5" aria-hidden="true" />
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

				<motion.div
					className="text-center mt-8"
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
