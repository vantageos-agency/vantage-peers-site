"use client";

import { motion } from "framer-motion";
import { Download, Network, Settings } from "lucide-react";

const content = {
	en: {
		title: "Up in under 10 minutes.",
		subtitle:
			"Three steps from zero to a coordinated multi-agent memory system.",
		steps: [
			{
				number: "01",
				icon: Download,
				title: "Install",
				description:
					"Clone the repo. Run `npx convex deploy`. Add VantagePeers as an MCP server in your Claude config. That is all the infrastructure.",
				color: "text-chart-1",
				bgColor: "bg-chart-1/10",
			},
			{
				number: "02",
				icon: Settings,
				title: "Configure",
				description:
					"Set your orchestrator ID and instance name. Each agent gets a unique identity. Namespaces isolate per project. No schema migration needed.",
				color: "text-chart-2",
				bgColor: "bg-chart-2/10",
			},
			{
				number: "03",
				icon: Network,
				title: "Coordinate",
				description:
					"Agents store memory, send messages, assign tasks — all via the 45 MCP tools. Works across machines, across sessions, across agent instances.",
				color: "text-chart-4",
				bgColor: "bg-chart-4/10",
			},
		],
		emphasis:
			"Powered by Convex — real-time database with built-in auth, full-text search, and zero-config scaling.",
	},
	fr: {
		title: "Opérationnel en moins de 10 minutes.",
		subtitle:
			"Trois étapes de zéro à un système de mémoire multi-agents coordonné.",
		steps: [
			{
				number: "01",
				icon: Download,
				title: "Installer",
				description:
					"Clonez le repo. Lancez `npx convex deploy`. Ajoutez VantagePeers comme serveur MCP dans votre config Claude. C'est toute l'infrastructure.",
				color: "text-chart-1",
				bgColor: "bg-chart-1/10",
			},
			{
				number: "02",
				icon: Settings,
				title: "Configurer",
				description:
					"Définissez votre ID d'orchestrateur et nom d'instance. Chaque agent obtient une identité unique. Les namespaces isolent par projet. Aucune migration de schéma nécessaire.",
				color: "text-chart-2",
				bgColor: "bg-chart-2/10",
			},
			{
				number: "03",
				icon: Network,
				title: "Coordonner",
				description:
					"Les agents stockent la mémoire, envoient des messages, assignent des tâches — le tout via les 35 outils MCP. Fonctionne entre machines, entre sessions, entre instances d'agents.",
				color: "text-chart-4",
				bgColor: "bg-chart-4/10",
			},
		],
		emphasis:
			"Propulsé par Convex — base de données temps réel avec auth intégrée, recherche full-text et mise à l’échelle sans configuration.",
	},
};

interface PeersHowItWorksProps {
	locale: "en" | "fr";
}

export function PeersHowItWorks({ locale }: PeersHowItWorksProps) {
	const t = content[locale];

	return (
		<section id="how-it-works" className="py-16 md:py-24 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

				<div className="relative">
					{/* Connection line */}
					<div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
						{t.steps.map((step, index) => (
							<motion.div
								key={step.title}
								className="relative"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.15 }}
							>
								<div className="relative bg-background p-8 rounded-2xl border border-border text-center">
									{/* Step number badge */}
									<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-background border border-border rounded-full font-mono text-sm font-medium">
										{step.number}
									</div>

									{/* Icon */}
									<div
										className={`size-16 rounded-2xl ${step.bgColor} flex items-center justify-center mx-auto mb-6 mt-2`}
									>
										<step.icon className={`size-8 ${step.color}`} />
									</div>

									{/* Content */}
									<h3 className="text-xl font-semibold mb-3">{step.title}</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{step.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Emphasis */}
				<motion.div
					className="text-center mt-16 p-6 rounded-3xl bg-primary/5 border border-primary/20 max-w-2xl mx-auto"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					<p className="text-sm font-medium text-muted-foreground">
						{t.emphasis}
					</p>
				</motion.div>
			</div>
		</section>
	);
}
