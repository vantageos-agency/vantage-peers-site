"use client";

import { motion } from "framer-motion";

const content = {
	en: {
		title: "How VantagePeers compares.",
		subtitle: "Honest comparison. Every checkmark verified.",
		caption: "Comparison of AI agent coordination solutions",
		headers: ["", "mem0", "supermemory", "Zep", "claude-peers", "VantagePeers"],
		rows: [
			{
				feature: "Starting price",
				mem0: "Free (limited)",
				supermemory: "Free (1M tokens)",
				zep: "$475/mo",
				claudePeers: "Free",
				vantagePeers: "Free (FSL)",
			},
			{
				feature: "Semantic memory",
				mem0: true,
				supermemory: true,
				zep: true,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Memory relations",
				mem0: "Enterprise only",
				supermemory: true,
				zep: true,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Cross-machine messaging",
				mem0: false,
				supermemory: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Task coordination",
				mem0: false,
				supermemory: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Mission planning",
				mem0: false,
				supermemory: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Issues tracking",
				mem0: false,
				supermemory: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Fix patterns KB",
				mem0: false,
				supermemory: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "GitHub webhooks",
				mem0: false,
				supermemory: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Session diary",
				mem0: false,
				supermemory: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Self-hostable",
				mem0: "Enterprise only",
				supermemory: "Enterprise only",
				zep: "Abandoned",
				claudePeers: "Local only",
				vantagePeers: true,
			},
			{
				feature: "MCP native",
				mem0: false,
				supermemory: false,
				zep: false,
				claudePeers: true,
				vantagePeers: true,
			},
			{
				feature: "Open source",
				mem0: "Apache-2.0",
				supermemory: "MIT",
				zep: "Partial",
				claudePeers: true,
				vantagePeers: "FSL-1.1",
			},
		],
		notes: [
			"mem0: free tier limited to 10K add requests/mo. Graph memory requires Pro ($249/mo) or Enterprise.",
			"supermemory: free tier limited to 1M tokens/mo. Enterprise for VPC deployment.",
			"Zep: Community Edition no longer maintained as of 2024.",
			"claude-peers: local SQLite only, no cross-machine coordination.",
			"VantagePeers: FSL-1.1 converts to Apache 2.0 after 2 years. Self-hosted on your own Convex deployment.",
		],
		available: "Available",
		notAvailable: "Not available",
	},
	fr: {
		title: "Comment VantagePeers se compare.",
		subtitle: "Comparaison honn\u00eate. Chaque case v\u00e9rifi\u00e9e.",
		caption: "Comparaison des solutions de coordination pour agents IA",
		headers: ["", "mem0", "supermemory", "Zep", "claude-peers", "VantagePeers"],
		rows: [
			{
				feature: "Prix de d\u00e9part",
				mem0: "Gratuit (limit\u00e9)",
				supermemory: "Gratuit (1M tokens)",
				zep: "475$/mois",
				claudePeers: "Gratuit",
				vantagePeers: "Gratuit (FSL)",
			},
			{
				feature: "M\u00e9moire s\u00e9mantique",
				mem0: true,
				supermemory: true,
				zep: true,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Relations m\u00e9moire",
				mem0: "Enterprise uniquement",
				supermemory: true,
				zep: true,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Messagerie cross-machine",
				mem0: false,
				supermemory: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Coordination de t\u00e2ches",
				mem0: false,
				supermemory: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Planification de missions",
				mem0: false,
				supermemory: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Suivi d\u2019issues",
				mem0: false,
				supermemory: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Base de fix patterns",
				mem0: false,
				supermemory: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Webhooks GitHub",
				mem0: false,
				supermemory: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Journal de session",
				mem0: false,
				supermemory: false,
				zep: false,
				claudePeers: false,
				vantagePeers: true,
			},
			{
				feature: "Auto-h\u00e9bergeable",
				mem0: "Enterprise uniquement",
				supermemory: "Enterprise uniquement",
				zep: "Abandonn\u00e9",
				claudePeers: "Local seulement",
				vantagePeers: true,
			},
			{
				feature: "Natif MCP",
				mem0: false,
				supermemory: false,
				zep: false,
				claudePeers: true,
				vantagePeers: true,
			},
			{
				feature: "Open source",
				mem0: "Apache-2.0",
				supermemory: "MIT",
				zep: "Partiel",
				claudePeers: true,
				vantagePeers: "FSL-1.1",
			},
		],
		notes: [
			"mem0 : tier gratuit limit\u00e9 \u00e0 10K requ\u00eates d\u2019ajout/mois. M\u00e9moire graphe n\u00e9cessite Pro (249$/mois) ou Enterprise.",
			"supermemory : tier gratuit limit\u00e9 \u00e0 1M tokens/mois. Enterprise pour d\u00e9ploiement VPC.",
			"Zep : la Community Edition n\u2019est plus maintenue depuis 2024.",
			"claude-peers : SQLite local uniquement, pas de coordination cross-machine.",
			"VantagePeers : FSL-1.1 se convertit en Apache 2.0 apr\u00e8s 2 ans. Auto-h\u00e9berg\u00e9 sur votre propre d\u00e9ploiement Convex.",
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
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
											className={`py-4 px-4 text-left font-semibold ${
												i === 0 ? "w-1/4" : "text-center"
											} ${i === t.headers.length - 1 ? "text-chart-1" : "text-muted-foreground"}`}
										>
											{i === 0 ? (
												<span className="sr-only">
													{locale === "fr" ? "Fonctionnalit\u00e9" : "Feature"}
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
										<th scope="row" className="py-3 px-4 font-medium text-foreground text-left">
											{row.feature}
										</th>
										<td className="py-3 px-4 text-center">
											<CellContent value={row.mem0} isVantage={false} availableLabel={t.available} notAvailableLabel={t.notAvailable} />
										</td>
										<td className="py-3 px-4 text-center">
											<CellContent value={row.supermemory} isVantage={false} availableLabel={t.available} notAvailableLabel={t.notAvailable} />
										</td>
										<td className="py-3 px-4 text-center">
											<CellContent value={row.zep} isVantage={false} availableLabel={t.available} notAvailableLabel={t.notAvailable} />
										</td>
										<td className="py-3 px-4 text-center">
											<CellContent value={row.claudePeers} isVantage={false} availableLabel={t.available} notAvailableLabel={t.notAvailable} />
										</td>
										<td className="py-3 px-4 text-center bg-chart-1/5">
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
