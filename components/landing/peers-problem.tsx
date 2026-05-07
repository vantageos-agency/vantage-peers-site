"use client";

import { motion } from "framer-motion";
import {
	ClipboardList,
	Copy,
	EyeOff,
	Layers,
	RotateCcw,
	Unplug,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const content = {
	en: {
		title: "Your AI agents forget everything between sessions.",
		subtitle:
			"You spend more time explaining context than doing actual work. Your agents reset. Your notes scatter. Your team stays in the dark. That is not an AI problem — it is a memory problem.",
		problems: [
			{
				icon: RotateCcw,
				title: "Your agent starts from zero. Every time.",
				description:
					"Every new session, every new tab — your agent has no idea what you worked on yesterday. You repeat yourself. It guesses. You correct it.",
			},
			{
				icon: ClipboardList,
				title: "10 minutes wasted before any real work starts.",
				description:
					"Before you can actually build, you re-explain the project, the constraints, the last decision. Every. Single. Time. That is not setup — that is a tax.",
			},
			{
				icon: Layers,
				title: "Your context lives in 5 tools at once.",
				description:
					"Notion. ChatGPT history. Claude projects. A doc somewhere. A Slack thread. None of it talks to your agents. You are the glue — manually.",
			},
			{
				icon: Copy,
				title: "Copy-pasting between ChatGPT and Claude is not a workflow.",
				description:
					"Switching models mid-project means manually transferring context. You copy. You paste. You hope nothing gets lost. It always does.",
			},
			{
				icon: Unplug,
				title: "Your agents work in silos. They never compare notes.",
				description:
					"You have one agent for code, one for research, one for writing. They do not share what they learn. Every agent is an island.",
			},
			{
				icon: EyeOff,
				title: "Your team has no idea what your agents are doing.",
				description:
					"No shared memory. No audit trail. No way to pick up where someone else's agent left off. Collaboration with AI stops at the individual level.",
			},
		],
		closing:
			"This is not an AI limitation. Your models are capable — they just have no memory between sessions, no shared context across agents, and no way to coordinate at team scale. VantagePeers gives your agents a persistent, shared brain. Open. Self-hosted. Yours.",
	},
	fr: {
		title: "Tes agents IA oublient tout entre les sessions.",
		subtitle:
			"Tu passes plus de temps à expliquer le contexte qu'à travailler vraiment. Tes agents repartent de zéro. Tes notes s'éparpillent. Ton équipe ne sait rien de ce qui se passe. Ce n'est pas un problème d'IA — c'est un problème de mémoire.",
		problems: [
			{
				icon: RotateCcw,
				title: "Ton agent repart de zéro. À chaque fois.",
				description:
					"Nouvelle session, nouvel onglet — ton agent ne sait pas ce que tu faisais hier. Tu te répètes. Il devine. Tu corriges.",
			},
			{
				icon: ClipboardList,
				title: "10 minutes perdues avant chaque vraie session.",
				description:
					"Avant de pouvoir vraiment avancer, tu ré-expliques le projet, les contraintes, la dernière décision. À chaque fois. Ça ne s'appelle pas de la configuration — ça s'appelle une perte de temps.",
			},
			{
				icon: Layers,
				title: "Ton contexte est éparpillé dans 5 outils.",
				description:
					"Notion. Historique ChatGPT. Projets Claude. Un doc quelque part. Un fil Slack. Rien de tout ça ne parle à tes agents. C'est toi qui fais la colle — à la main.",
			},
			{
				icon: Copy,
				title: "Copier-coller entre ChatGPT et Claude, c'est pas un workflow.",
				description:
					"Changer de modèle en cours de projet veut dire transférer le contexte à la main. Tu copies. Tu colles. Tu espères que rien se perd. Il y a toujours quelque chose.",
			},
			{
				icon: Unplug,
				title: "Tes agents travaillent en silos. Ils ne se parlent pas.",
				description:
					"Un agent pour le code, un pour la recherche, un pour la rédaction. Ils ne partagent pas ce qu'ils apprennent. Chaque agent est une île.",
			},
			{
				icon: EyeOff,
				title: "Ton équipe ne sait pas ce que font tes agents.",
				description:
					"Pas de mémoire partagée. Pas de trace. Pas moyen de reprendre là où l'agent d'un collègue s'est arrêté. La collaboration avec l'IA s'arrête à l'individu.",
			},
		],
		closing:
			"Ce n'est pas une limite de l'IA. Tes modèles sont capables — ils n'ont juste pas de mémoire entre les sessions, pas de contexte partagé entre les agents, pas de coordination à l'échelle de l'équipe. VantagePeers donne à tes agents une mémoire persistante et partagée. Ouverte. Auto-hébergée. La tienne.",
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
						{t.title}
					</h2>
					<p className="text-lg text-muted-foreground">{t.subtitle}</p>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
									<div className="size-12 rounded-3xl bg-destructive/10 flex items-center justify-center mx-auto mb-4">
										<problem.icon
											className="size-6 text-destructive"
											aria-hidden="true"
										/>
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
