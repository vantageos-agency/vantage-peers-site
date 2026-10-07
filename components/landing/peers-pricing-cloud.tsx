"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface CloudTier {
	name: string;
	price: string;
	period: string;
	description: string;
	features: string[];
	cta: string;
	ctaHref: string;
	highlight: boolean;
	badge?: string;
	noPriceLabel?: string;
}

interface CloudContent {
	cloudLabel: string;
	cloudSubtitle: string;
	tiers: CloudTier[];
}

const content: Record<"en" | "fr", CloudContent> = {
	en: {
		cloudLabel: "Cloud",
		cloudSubtitle: "We host it. You just use it.",
		tiers: [
			{
				name: "Solo",
				price: "€49",
				period: "/year",
				description: "Full VantagePeers, hosted and managed.",
				features: [
					"Full VantagePeers hosted by us",
					"No Convex account needed",
					"Automatic updates",
					"Web dashboard access",
					"Email support",
				],
				cta: "Start Solo",
				ctaHref: "mailto:contact@vantageos.com?subject=Cloud%20Solo",
				highlight: false,
				badge: "Launch price",
			},
			{
				name: "Team",
				price: "€290",
				period: "/year",
				description: "Shared memory for your whole team.",
				features: [
					"Everything in Solo",
					"Shared memory across all team agents",
					"Multi-user access",
					"Team audit trail",
					"Priority email support",
				],
				cta: "Start Team",
				ctaHref: "mailto:contact@vantageos.com?subject=Cloud%20Team",
				highlight: true,
			},
			{
				name: "Enterprise",
				price: "",
				period: "",
				description: "Custom deployment. SLA. Dedicated support.",
				features: [
					"Everything in Team",
					"Dedicated cloud instance",
					"Custom SLA + uptime guarantee",
					"SSO + advanced access control",
					"Dedicated onboarding + training",
				],
				cta: "Book a Call",
				ctaHref: "mailto:contact@vantageos.com?subject=Enterprise",
				highlight: false,
				noPriceLabel: "Custom pricing",
			},
		],
	},
	fr: {
		cloudLabel: "Cloud",
		cloudSubtitle: "On héberge. Vous utilisez, c’est tout.",
		tiers: [
			{
				name: "Solo",
				price: "49€",
				period: "/an",
				description: "VantagePeers complet, hébergé et géré.",
				features: [
					"VantagePeers complet hébergé par nous",
					"Pas de compte Convex nécessaire",
					"Mises à jour automatiques",
					"Accès au tableau de bord web",
					"Support email",
				],
				cta: "Commencer Solo",
				ctaHref: "mailto:contact@vantageos.com?subject=Cloud%20Solo",
				highlight: false,
				badge: "Prix de lancement",
			},
			{
				name: "Équipe",
				price: "290€",
				period: "/an",
				description: "Mémoire partagée pour toute votre équipe.",
				features: [
					"Tout ce qui est dans Solo",
					"Mémoire partagée entre tous les agents de l’équipe",
					"Accès multi-utilisateurs",
					"Journal d’audit équipe",
					"Support email prioritaire",
				],
				cta: "Commencer Équipe",
				ctaHref: "mailto:contact@vantageos.com?subject=Cloud%20%C3%89quipe",
				highlight: true,
			},
			{
				name: "Entreprise",
				price: "",
				period: "",
				description: "Déploiement personnalisé. SLA. Support dédié.",
				features: [
					"Tout ce qui est dans Équipe",
					"Instance cloud dédiée",
					"SLA personnalisé + garantie de disponibilité",
					"SSO + contrôle d’accès avancé",
					"Onboarding + formation dédiés",
				],
				cta: "Prendre rendez-vous",
				ctaHref: "mailto:contact@vantageos.com?subject=Entreprise",
				highlight: false,
				noPriceLabel: "Tarification sur mesure",
			},
		],
	},
};

interface PeersPricingCloudProps {
	locale: "en" | "fr";
}

export function PeersPricingCloud({ locale }: PeersPricingCloudProps) {
	const t = content[locale];

	return (
		<div>
			<div className="border-t border-border my-12" />
			<motion.div
				className="mb-8"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				<h3 className="text-2xl font-bold tracking-tight mb-2">
					{t.cloudLabel}
				</h3>
				<p className="text-muted-foreground">{t.cloudSubtitle}</p>
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
							{tier.badge ? (
								<span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-chart-1/15 text-chart-2 mb-3">
									{tier.badge}
								</span>
							) : null}
							<h4 className="text-xl font-semibold mb-2">{tier.name}</h4>
							<div className="flex items-baseline gap-1 mb-2">
								{tier.price ? (
									<>
										<span className="text-3xl font-bold">{tier.price}</span>
										<span className="text-muted-foreground text-sm">
											{tier.period}
										</span>
									</>
								) : (
									<span className="text-xl font-semibold text-muted-foreground">
										{tier.noPriceLabel}
									</span>
								)}
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
		</div>
	);
}
