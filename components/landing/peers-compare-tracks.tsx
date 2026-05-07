"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

type RowIcon = "check" | "neutral";

interface CompareRow {
	dimension: string;
	selfHosted: string;
	cloud: string;
	selfHostedIcon: RowIcon;
	cloudIcon: RowIcon;
}

interface CompareContent {
	title: string;
	headers: {
		dimension: string;
		selfHosted: string;
		cloud: string;
	};
	rows: CompareRow[];
}

const content: Record<"en" | "fr", CompareContent> = {
	en: {
		title: "Self-Hosted or Cloud?",
		headers: {
			dimension: "Dimension",
			selfHosted: "Self-Hosted",
			cloud: "Cloud",
		},
		rows: [
			{
				dimension: "Setup time",
				selfHosted: "10 min (CLI) or 2 min (Railway)",
				cloud: "Instant — no setup",
				selfHostedIcon: "neutral",
				cloudIcon: "check",
			},
			{
				dimension: "Hosting",
				selfHosted: "Your Convex account",
				cloud: "Managed by VantagePeers",
				selfHostedIcon: "neutral",
				cloudIcon: "check",
			},
			{
				dimension: "Data residency",
				selfHosted: "100% your Convex deployment",
				cloud: "VantagePeers cloud (EU)",
				selfHostedIcon: "check",
				cloudIcon: "neutral",
			},
			{
				dimension: "Updates",
				selfHosted: "Manual (pull + redeploy)",
				cloud: "Automatic",
				selfHostedIcon: "neutral",
				cloudIcon: "check",
			},
			{
				dimension: "Price model",
				selfHosted: "Free forever + optional paid support",
				cloud: "Annual subscription",
				selfHostedIcon: "check",
				cloudIcon: "neutral",
			},
			{
				dimension: "Who it's for",
				selfHosted: "Devs comfortable with Convex CLI",
				cloud: "Individuals + teams wanting zero ops",
				selfHostedIcon: "neutral",
				cloudIcon: "neutral",
			},
		],
	},
	fr: {
		title: "Auto-hébergé ou Cloud ?",
		headers: {
			dimension: "Dimension",
			selfHosted: "Auto-hébergé",
			cloud: "Cloud",
		},
		rows: [
			{
				dimension: "Temps de mise en place",
				selfHosted: "10 min (CLI) ou 2 min (Railway)",
				cloud: "Instantané — aucune configuration",
				selfHostedIcon: "neutral",
				cloudIcon: "check",
			},
			{
				dimension: "Hébergement",
				selfHosted: "Votre compte Convex",
				cloud: "Géré par VantagePeers",
				selfHostedIcon: "neutral",
				cloudIcon: "check",
			},
			{
				dimension: "Résidence des données",
				selfHosted: "100% votre déploiement Convex",
				cloud: "Cloud VantagePeers (EU)",
				selfHostedIcon: "check",
				cloudIcon: "neutral",
			},
			{
				dimension: "Mises à jour",
				selfHosted: "Manuelles (pull + redéploiement)",
				cloud: "Automatiques",
				selfHostedIcon: "neutral",
				cloudIcon: "check",
			},
			{
				dimension: "Modèle tarifaire",
				selfHosted: "Gratuit pour toujours + support payant optionnel",
				cloud: "Abonnement annuel",
				selfHostedIcon: "check",
				cloudIcon: "neutral",
			},
			{
				dimension: "Pour qui",
				selfHosted: "Devs à l'aise avec Convex CLI",
				cloud: "Individus + équipes voulant zéro ops",
				selfHostedIcon: "neutral",
				cloudIcon: "neutral",
			},
		],
	},
};

function IconCell({ type }: { type: RowIcon }) {
	if (type === "check") {
		return (
			<Check className="size-4 text-chart-1 shrink-0" aria-hidden="true" />
		);
	}
	return (
		<Minus
			className="size-4 text-muted-foreground shrink-0"
			aria-hidden="true"
		/>
	);
}

interface PeersCompareTracksProps {
	locale: "en" | "fr";
}

export function PeersCompareTracks({ locale }: PeersCompareTracksProps) {
	const t = content[locale];

	return (
		<div>
			<div className="border-t border-border my-12" />
			<motion.div
				className="text-center mb-8"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				<h3 className="text-2xl font-bold tracking-tight">{t.title}</h3>
			</motion.div>

			<motion.div
				className="overflow-x-auto"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.1 }}
			>
				<table className="w-full min-w-[500px] border-collapse text-sm">
					<thead>
						<tr className="border-b border-border">
							<th className="text-left py-3 pr-4 font-semibold w-[40%]">
								{t.headers.dimension}
							</th>
							<th className="text-left py-3 px-4 font-semibold w-[30%]">
								{t.headers.selfHosted}
							</th>
							<th className="text-left py-3 pl-4 font-semibold w-[30%]">
								{t.headers.cloud}
							</th>
						</tr>
					</thead>
					<tbody>
						{t.rows.map((row, index) => (
							<tr
								key={row.dimension}
								className={`border-b border-border/50 ${
									index % 2 === 0 ? "bg-muted/20" : ""
								}`}
							>
								<td className="py-3 pr-4 font-medium text-foreground">
									{row.dimension}
								</td>
								<td className="py-3 px-4 text-muted-foreground">
									<div className="flex items-start gap-2">
										<IconCell type={row.selfHostedIcon} />
										<span>{row.selfHosted}</span>
									</div>
								</td>
								<td className="py-3 pl-4 text-muted-foreground">
									<div className="flex items-start gap-2">
										<IconCell type={row.cloudIcon} />
										<span>{row.cloud}</span>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</motion.div>
		</div>
	);
}
