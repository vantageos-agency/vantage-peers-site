"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const content = {
	en: {
		title: "Why VantagePeers wins.",
		subtitle: "The math is simple. The difference is structural.",
		headers: ["", "mem0", "Zep", "claude-peers", "VantagePeers"],
		rows: [
			{
				feature: "Price",
				mem0: "$249/mo (graph)",
				zep: "$475/mo + overages",
				claudePeers: "Free",
				vantagePeers: "Free (MIT)",
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
	},
	fr: {
		title: "Pourquoi VantagePeers gagne.",
		subtitle: "Le calcul est simple. La difference est structurelle.",
		headers: ["", "mem0", "Zep", "claude-peers", "VantagePeers"],
		rows: [
			{
				feature: "Prix",
				mem0: "249$/mois (graphe)",
				zep: "475$/mois + depassements",
				claudePeers: "Gratuit",
				vantagePeers: "Gratuit (MIT)",
			},
			{
				feature: "Memoire graphe",
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
				feature: "Accuses de lecture",
				mem0: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Coordination de taches",
				mem0: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Taches recurrentes (cron)",
				mem0: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Auto-hebergeable",
				mem0: false,
				zep: "Community abandonnee",
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
			"mem0 : la memoire graphe necessite l'Enterprise a 249$/mois.",
			"Zep : la Community Edition n'est plus maintenue depuis 2024.",
			"claude-peers : SQLite local uniquement, pas de coordination cross-machine.",
		],
	},
};

type CellValue = boolean | string;

function CellContent({
	value,
	isVantage,
}: {
	value: CellValue;
	isVantage: boolean;
}) {
	if (typeof value === "boolean") {
		return value ? (
			<Check
				className={`size-4 mx-auto ${isVantage ? "text-chart-1" : "text-muted-foreground"}`}
				aria-label="yes"
			/>
		) : (
			<X className="size-4 mx-auto text-muted-foreground/40" aria-label="no" />
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
							<thead>
								<tr className="border-b border-border bg-muted/30">
									{t.headers.map((header, i) => (
										<th
											key={header || `h-${i}`}
											className={`py-4 px-5 text-left font-semibold ${
												i === 0 ? "w-1/3" : "text-center"
											} ${i === t.headers.length - 1 ? "text-chart-1" : "text-muted-foreground"}`}
										>
											{header}
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
										<td className="py-3.5 px-5 font-medium text-foreground">
											{row.feature}
										</td>
										<td className="py-3.5 px-5 text-center">
											<CellContent value={row.mem0} isVantage={false} />
										</td>
										<td className="py-3.5 px-5 text-center">
											<CellContent value={row.zep} isVantage={false} />
										</td>
										<td className="py-3.5 px-5 text-center">
											<CellContent value={row.claudePeers} isVantage={false} />
										</td>
										<td className="py-3.5 px-5 text-center bg-chart-1/5">
											<CellContent value={row.vantagePeers} isVantage={true} />
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
