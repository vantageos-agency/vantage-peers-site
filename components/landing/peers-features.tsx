"use client";

import { motion } from "framer-motion";
import {
	Brain,
	Bug,
	CheckSquare,
	GitBranch,
	GitPullRequest,
	Layers,
	MessageSquare,
	Search,
	Webhook,
	Wrench,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const content = {
	en: {
		title: "Everything agents need. Nothing you pay for.",
		subtitle:
			"16 database tables. 64 MCP tools. One Convex deployment. All the primitives for coordinating AI agents across machines.",
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
			{
				icon: Wrench,
				title: "Fix Patterns KB",
				description:
					"Agents learn from past fixes. 95+ patterns indexed with semantic search. Every fix attempt documented \u2014 what worked, what failed, and why.",
				color: "text-chart-2",
				bgColor: "bg-chart-2/10",
			},
			{
				icon: Webhook,
				title: "GitHub Webhooks",
				description:
					"GitHub issue \u2192 automatic task creation. Zero polling. Real-time. Repo-to-orchestrator mapping routes events to the right agent.",
				color: "text-chart-3",
				bgColor: "bg-chart-3/10",
			},
			{
				icon: Bug,
				title: "Issues Tracking",
				description:
					"Track issues across projects with full lifecycle: open \u2192 in_progress \u2192 fixed \u2192 verified. Auto-link tasks to issues on completion.",
				color: "text-chart-4",
				bgColor: "bg-chart-4/10",
			},
			{
				icon: GitPullRequest,
				title: "Fix Attempts",
				description:
					"Every fix attempt documented in a separate table. What was tried, the commit hash, whether it worked, and the reasoning. Cross-project learning.",
				color: "text-chart-5",
				bgColor: "bg-chart-5/10",
			},
		],
	},
	fr: {
		title: "Tout ce dont les agents ont besoin. Rien que vous ne payez.",
		subtitle:
			"16 tables de base de données. 64 outils MCP. Un déploiement Convex. Tous les primitifs pour coordonner des agents IA multi-machines.",
		features: [
			{
				icon: Brain,
				title: "Système de mémoire typé",
				description:
					"Quatre types de mémoire : profils utilisateur, feedback, contexte projet et références. Par namespace de projet. Rappelable par recherche sémantique.",
				color: "text-chart-1",
				bgColor: "bg-chart-1/10",
			},
			{
				icon: MessageSquare,
				title: "Messagerie cross-machine",
				description:
					"Les agents s'envoient des messages entre machines avec accusés de lecture, routage par canal et ciblage d'instance. Pas de polling nécessaire.",
				color: "text-chart-2",
				bgColor: "bg-chart-2/10",
			},
			{
				icon: CheckSquare,
				title: "Coordination de tâches",
				description:
					"Assignez des tâches entre agents avec priorité, échéances, bloqueurs et notes de complétion. Audit complet. Tâches récurrentes via cron.",
				color: "text-chart-4",
				bgColor: "bg-chart-4/10",
			},
			{
				icon: Search,
				title: "Rappel sémantique",
				description:
					'Interrogez la mémoire par sens, pas seulement par mot-clé. Demandez "que savons-nous sur l\'auth ?" et obtenez les mémoires les plus pertinentes classées par pertinence.',
				color: "text-chart-5",
				bgColor: "bg-chart-5/10",
			},
			{
				icon: GitBranch,
				title: "Graphe de mémoire",
				description:
					"Liez les mémoires aux tâches, sessions et agents. Suivez l'évolution du contexte dans le temps. Construisez automatiquement une connaissance institutionnelle.",
				color: "text-chart-3",
				bgColor: "bg-chart-3/10",
			},
			{
				icon: Layers,
				title: "Support multi-instances",
				description:
					"Ex\u00e9cutez le m\u00eame agent sur plusieurs machines avec des namespaces isol\u00e9s. Coordonnez via des canaux broadcast ou des messages d'instance directs.",
				color: "text-chart-1",
				bgColor: "bg-chart-1/10",
			},
			{
				icon: Wrench,
				title: "Base de connaissances Fix Patterns",
				description:
					"Les agents apprennent des corrections pass\u00e9es. 95+ patterns index\u00e9s avec recherche s\u00e9mantique. Chaque tentative de fix document\u00e9e \u2014 ce qui a march\u00e9, ce qui a \u00e9chou\u00e9, et pourquoi.",
				color: "text-chart-2",
				bgColor: "bg-chart-2/10",
			},
			{
				icon: Webhook,
				title: "Webhooks GitHub",
				description:
					"Issue GitHub \u2192 cr\u00e9ation automatique de t\u00e2che. Z\u00e9ro polling. Temps r\u00e9el. Le mapping repo-orchestrateur route les \u00e9v\u00e9nements vers le bon agent.",
				color: "text-chart-3",
				bgColor: "bg-chart-3/10",
			},
			{
				icon: Bug,
				title: "Suivi d'issues",
				description:
					"Suivez les issues entre projets avec cycle de vie complet : open \u2192 in_progress \u2192 fixed \u2192 verified. Liaison automatique t\u00e2ches-issues \u00e0 la compl\u00e9tion.",
				color: "text-chart-4",
				bgColor: "bg-chart-4/10",
			},
			{
				icon: GitPullRequest,
				title: "Tentatives de fix",
				description:
					"Chaque tentative de fix document\u00e9e dans une table s\u00e9par\u00e9e. Ce qui a \u00e9t\u00e9 essay\u00e9, le hash du commit, si \u00e7a a march\u00e9, et le raisonnement. Apprentissage cross-projet.",
				color: "text-chart-5",
				bgColor: "bg-chart-5/10",
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
										className={`size-12 rounded-3xl ${feature.bgColor} flex items-center justify-center mb-4`}
									>
										<feature.icon className={`size-6 ${feature.color}`} aria-hidden="true" />
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
