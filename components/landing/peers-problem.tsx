"use client";

import { motion } from "framer-motion";
import { CreditCard, Lock, ServerCrash, WifiOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const content = {
	en: {
		title: "Existing solutions are broken.",
		titleAccent: "Here is why.",
		subtitle:
			"You tried mem0. You got a $249/month invoice. You tried Zep — Community Edition was abandoned. You hacked together something local — no cross-machine, no read receipts, no tasks.",
		problems: [
			{
				icon: CreditCard,
				title: "$249-475/month just for memory",
				description:
					"mem0 charges $249/mo for graph memory. Zep starts at $475/mo plus overages. Memory should not cost more than your LLM.",
			},
			{
				icon: ServerCrash,
				title: "Zep Community Edition abandoned",
				description:
					"Zep pushed everyone to their cloud. The self-hosted version stopped receiving updates. You cannot build on an abandoned foundation.",
			},
			{
				icon: Lock,
				title: "Vendor lock-in",
				description:
					"Proprietary schemas, closed APIs, no export. When they raise prices or shut down, your agents lose their memory overnight.",
			},
			{
				icon: WifiOff,
				title: "Local-only hacks break at scale",
				description:
					"SQLite files and JSON dumps do not survive multi-agent, multi-machine setups. No messaging. No read receipts. No tasks.",
			},
		],
		closing:
			"You do not need a SaaS. You need an open protocol that runs on your infrastructure.",
	},
	fr: {
		title: "Les solutions existantes sont cassées.",
		titleAccent: "Voici pourquoi.",
		subtitle:
			"Vous avez essayé mem0 — 249$/mois pour la mémoire graphe. Vous avez essayé Zep — la Community Edition a été abandonnée. Vous avez bricolé quelque chose en local — pas de multi-machine, pas d'accusés de lecture, pas de tâches.",
		problems: [
			{
				icon: CreditCard,
				title: "249-475$/mois juste pour la mémoire",
				description:
					"mem0 facture 249$/mois pour la mémoire graphe. Zep commence à 475$/mois + dépassements. La mémoire ne devrait pas coûter plus que votre LLM.",
			},
			{
				icon: ServerCrash,
				title: "Zep Community Edition abandonnée",
				description:
					"Zep a poussé tout le monde vers son cloud. La version auto-hébergée a arrêté de recevoir des mises à jour. On ne peut pas construire sur une base abandonnée.",
			},
			{
				icon: Lock,
				title: "Dépendance vendeur",
				description:
					"Schémas propriétaires, APIs fermées, pas d'export. Quand ils augmentent les prix ou ferment, vos agents perdent leur mémoire du jour au lendemain.",
			},
			{
				icon: WifiOff,
				title: "Les hacks locaux ne passent pas à l'échelle",
				description:
					"Les fichiers SQLite et dumps JSON ne survivent pas aux configurations multi-agents et multi-machines. Pas de messagerie. Pas d'accusés de lecture. Pas de tâches.",
			},
		],
		closing:
			"Vous n'avez pas besoin d'un SaaS. Vous avez besoin d'un protocole ouvert qui tourne sur votre infrastructure.",
	},
};

interface PeersProblemProps {
	locale: "en" | "fr";
}

export function PeersProblem({ locale }: PeersProblemProps) {
	const t = content[locale];

	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center max-w-3xl mx-auto mb-10"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
						{t.title}{" "}
						<span className="text-muted-foreground">{t.titleAccent}</span>
					</h2>
					<p className="text-lg text-muted-foreground">{t.subtitle}</p>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{t.problems.map((problem, index) => (
						<motion.div
							key={problem.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Card className="relative overflow-hidden h-full">
								<CardContent className="relative p-6 text-center">
									<div className="size-12 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto mb-4">
										<problem.icon className="size-6 text-destructive" />
									</div>
									<h3 className="font-semibold text-lg mb-2">
										{problem.title}
									</h3>
									<p className="text-muted-foreground text-sm">
										{problem.description}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				<motion.div
					className="text-center mt-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<p className="text-lg font-semibold text-foreground">{t.closing}</p>
				</motion.div>
			</div>
		</section>
	);
}
