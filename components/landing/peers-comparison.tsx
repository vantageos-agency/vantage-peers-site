"use client";

import { motion } from "framer-motion";

const content = {
	en: {
		title: "Why VantagePeers wins.",
		subtitle: "The math is simple. The difference is structural.",
		caption: "Comparison of AI agent memory solutions",
		headers: ["", "mem0", "Zep", "claude-peers", "VantagePeers"],
		rows: [
			{
				feature: "Price",
				mem0: "$249/mo (graph)",
				zep: "$475/mo + overages",
				claudePeers: "Free",
				vantagePeers: "Free (FSL)",
			},
			{
				feature: "Graph memory",
				mem0: true,
				zep: true,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Cross-machine messaging",
				mem0: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Read receipts",
				mem0: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Task coordination",
				mem0: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Recurring tasks (cron)",
				mem0: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Self-hostable",
				mem0: false,
				zep: "Community abandoned",
				claudePeers: "Local only",
				vantagePeers: true,
			},
			{
				feature: "MCP native",
				mem0: false,
				zep: false,
				claudePeers: true,
				vantagePeers: true,
			},
			{
				feature: "Open source",
				mem0: false,
				zep: "Partial",
				claudePeers: true,
				vantagePeers: true,
			},
		],
		notes: [
			"mem0: graph memory requires Enterprise at $249/mo.",
			"Zep: Community Edition no longer maintained as of 2024.",
			"claude-peers: local SQLite only, no cross-machine coordination.",
		],
		available: "Available",
		notAvailable: "Not available",
	},
	fr: {
		title: "Pourquoi VantagePeers gagne.",
		subtitle: "Le calcul est simple. La différence est structurelle.",
		caption: "Comparaison des solutions de mémoire pour agents IA",
		headers: ["", "mem0", "Zep", "claude-peers", "VantagePeers"],
		rows: [
			{
				feature: "Prix",
				mem0: "249$/mois (graphe)",
				zep: "475$/mois + dépassements",
				claudePeers: "Gratuit",
				vantagePeers: "Gratuit (FSL)",
			},
			{
				feature: "Mémoire graphe",
				mem0: true,
				zep: true,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Messagerie cross-machine",
				mem0: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Accusés de lecture",
				mem0: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Coordination de tâches",
				mem0: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Tâches récurrentes (cron)",
				mem0: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Auto-hébergeable",
				mem0: false,
				zep: "Community abandonnée",
				claudePeers: "Local seulement",
				vantagePeers: true,
			},
			{
				feature: "Natif MCP",
				mem0: false,
				zep: false,
				claudePeers: true,
				vantagePeers: true,
			},
			{
				feature: "Open source",
				mem0: false,
				zep: "Partiel",
				claudePeers: true,
				vantagePeers: true,
			},
		],
		notes: [
			"mem0 : la mémoire graphe nécessite l'Enterprise à 249$/mois.",
			"Zep : la Community Edition n'est plus maintenue depuis 2024.",
			"claude-peers : SQLite local uniquement, pas de coordination cross-machine.",
		],
		available: "Disponible",
		notAvailable: "Non disponible",
	},
};

type CellValue = boolean | string;

function CellContent({
	value,
	isVantage,
	availableLabel,
	notAvailableLabel,
}: {
	value: CellValue;
	isVantage: boolean;
	availableLabel: string;
	notAvailableLabel: string;
}) {
	if (typeof value === "boolean") {
		return value ? (
			<svg
				aria-label={availableLabel}
				role="img"
				className={`size-4 mx-auto ${isVantage ? "text-chart-1" : "text-muted-foreground"}`}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<polyline points="20 6 9 17 4 12" />
			</svg>
		) : (
			<svg
				aria-label={notAvailableLabel}
				role="img"
				className="size-4 mx-auto text-muted-foreground/40"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<line x1="18" y1="6" x2="6" y2="18" />
				<line x1="6" y1="6" x2="18" y2="18" />
			</svg>
		);
	}
	return (
		<span
			className={`text-sm ${isVantage ? "font-semibold text-chart-1" : "text-muted-foreground"}`}
		>
			{value}
		</span>
	);
}

interface PeersComparisonProps {
	locale: "en" | "fr";
}

export function PeersComparison({ locale }: PeersComparisonProps) {
	const t = content[locale];

	return (
		<section id="compare" className="py-16 md:py-24">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center max-w-3xl mx-auto mb-10"
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
					className="rounded-2xl border border-border bg-card overflow-hidden"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<div className="overflow-x-auto">
						<table className="w-full text-sm">
							<caption className="sr-only">{t.caption}</caption>
							<thead>
								<tr className="border-b border-border bg-muted/30">
									{t.headers.map((header, i) => (
										<th
											key={header || `h-${i}`}
											scope="col"
											className={`py-4 px-5 text-left font-semibold ${
												i === 0 ? "w-1/3" : "text-center"
											} ${i === t.headers.length - 1 ? "text-chart-1" : "text-muted-foreground"}`}
										>
											{i === 0 ? (
												<span className="sr-only">
													{locale === "fr" ? "Fonctionnalité" : "Feature"}
												</span>
											) : (
												header
											)}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{t.rows.map((row, rowIndex) => (
									<tr
										key={row.feature}
										className={`border-b border-border/50 ${
											rowIndex % 2 === 0 ? "" : "bg-muted/10"
										}`}
									>
										<th scope="row" className="py-3.5 px-5 font-medium text-foreground text-left">
											{row.feature}
										</th>
										<td className="py-3.5 px-5 text-center">
											<CellContent value={row.mem0} isVantage={false} availableLabel={t.available} notAvailableLabel={t.notAvailable} />
										</td>
										<td className="py-3.5 px-5 text-center">
											<CellContent value={row.zep} isVantage={false} availableLabel={t.available} notAvailableLabel={t.notAvailable} />
										</td>
										<td className="py-3.5 px-5 text-center">
											<CellContent value={row.claudePeers} isVantage={false} availableLabel={t.available} notAvailableLabel={t.notAvailable} />
										</td>
										<td className="py-3.5 px-5 text-center bg-chart-1/5">
											<CellContent value={row.vantagePeers} isVantage={true} availableLabel={t.available} notAvailableLabel={t.notAvailable} />
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</motion.div>

				<motion.div
					className="mt-6 space-y-1"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					{t.notes.map((note) => (
						<p key={note} className="text-xs text-muted-foreground">
							* {note}
						</p>
					))}
				</motion.div>
			</div>
		</section>
	);
}
