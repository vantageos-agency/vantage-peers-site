"use client";

import { motion } from "framer-motion";
import {
	Brain,
	CheckSquare,
	GitBranch,
	Layers,
	MessageSquare,
	Search,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const content = {
	en: {
		title: "Everything agents need. Nothing you pay for.",
		subtitle:
			"10 database tables. 35 MCP tools. One Convex deployment. All the primitives for coordinating AI agents across machines.",
		features: [
			{
				icon: Brain,
				title: "Typed Memory System",
				description:
					"Four memory types: user profiles, feedback, project context, and references. Namespaced by project. Recallable by semantic search.",
				color: "text-chart-1",
				bgColor: "bg-chart-1/10",
			},
			{
				icon: MessageSquare,
				title: "Cross-Machine Messaging",
				description:
					"Agents send messages across machines with read receipts, channel routing, and instance targeting. No polling required.",
				color: "text-chart-2",
				bgColor: "bg-chart-2/10",
			},
			{
				icon: CheckSquare,
				title: "Task Coordination",
				description:
					"Assign tasks between agents with priority, deadlines, blockers, and completion notes. Full audit trail. Recurring tasks via cron.",
				color: "text-chart-4",
				bgColor: "bg-chart-4/10",
			},
			{
				icon: Search,
				title: "Semantic Memory Recall",
				description:
					'Query memory by meaning, not just keyword. Ask "what do we know about auth?" and get the most relevant memories ranked by relevance.',
				color: "text-chart-5",
				bgColor: "bg-chart-5/10",
			},
			{
				icon: GitBranch,
				title: "Memory Graph",
				description:
					"Link memories to tasks, sessions, and agents. Track how context evolves over time. Build institutional knowledge automatically.",
				color: "text-chart-3",
				bgColor: "bg-chart-3/10",
			},
			{
				icon: Layers,
				title: "Multi-Instance Support",
				description:
					"Run the same agent on multiple machines with isolated namespaces. Coordinate via broadcast channels or direct instance messages.",
				color: "text-chart-1",
				bgColor: "bg-chart-1/10",
			},
		],
	},
	fr: {
		title: "Tout ce dont les agents ont besoin. Rien que vous ne payez.",
		subtitle:
			"10 tables de base de donnees. 35 outils MCP. Un deploiement Convex. Tous les primitives pour coordonner des agents IA multi-machines.",
		features: [
			{
				icon: Brain,
				title: "Systeme de memoire type",
				description:
					"Quatre types de memoire : profils utilisateur, feedback, contexte projet et references. Par namespace de projet. Rappelable par recherche semantique.",
				color: "text-chart-1",
				bgColor: "bg-chart-1/10",
			},
			{
				icon: MessageSquare,
				title: "Messagerie cross-machine",
				description:
					"Les agents s'envoient des messages entre machines avec accuses de lecture, routage par canal et ciblage d'instance. Pas de polling necessaire.",
				color: "text-chart-2",
				bgColor: "bg-chart-2/10",
			},
			{
				icon: CheckSquare,
				title: "Coordination de taches",
				description:
					"Assignez des taches entre agents avec priorite, echeances, bloqueurs et notes de completion. Audit complet. Taches recurrentes via cron.",
				color: "text-chart-4",
				bgColor: "bg-chart-4/10",
			},
			{
				icon: Search,
				title: "Rappel semantique",
				description:
					'Interrogez la memoire par sens, pas seulement par mot-cle. Demandez "que savons-nous sur l\'auth ?" et obtenez les memoires les plus pertinentes classees par pertinence.',
				color: "text-chart-5",
				bgColor: "bg-chart-5/10",
			},
			{
				icon: GitBranch,
				title: "Graphe de memoire",
				description:
					"Liez les memoires aux taches, sessions et agents. Suivez l'evolution du contexte dans le temps. Construisez automatiquement une connaissance institutionnelle.",
				color: "text-chart-3",
				bgColor: "bg-chart-3/10",
			},
			{
				icon: Layers,
				title: "Support multi-instances",
				description:
					"Executez le meme agent sur plusieurs machines avec des namespaces isoles. Coordonnez via des canaux broadcast ou des messages d'instance directs.",
				color: "text-chart-1",
				bgColor: "bg-chart-1/10",
			},
		],
	},
};

interface PeersFeaturesProps {
	locale: "en" | "fr";
}

export function PeersFeatures({ locale }: PeersFeaturesProps) {
	const t = content[locale];

	return (
		<section id="features" className="py-16 md:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{t.features.map((feature, index) => (
						<motion.div
							key={feature.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.08 }}
						>
							<Card className="h-full hover:shadow-lg transition-shadow">
								<CardContent className="p-6">
									<div
										className={`size-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}
									>
										<feature.icon className={`size-6 ${feature.color}`} />
									</div>
									<h3 className="font-semibold text-lg mb-2">
										{feature.title}
									</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{feature.description}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
