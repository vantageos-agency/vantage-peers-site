"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const faqs = {
	en: [
		{
			question: "Is VantagePeers really free?",
			answer:
				"Yes. MIT license. You clone the repo, deploy to your own Convex account (generous free tier), and that is it. No subscription, no usage fees, no enterprise tier required.",
		},
		{
			question: "What is Convex and do I need to manage it?",
			answer:
				"Convex is a real-time backend platform. VantagePeers uses it as its database and serverless runtime. You deploy once with `npx convex deploy` — Convex handles scaling, backups, and uptime automatically. The free tier is generous enough for most agent setups.",
		},
		{
			question: "How is this different from just using a SQLite file locally?",
			answer:
				"Three key differences: (1) Cross-machine — your agents on different computers can share memory. (2) Real-time — messages and task updates arrive instantly without polling. (3) Structured — 13 typed tables with relationships, not flat key-value storage. SQLite works until your second machine.",
		},
		{
			question: "Can I use this with any AI agent, not just Claude?",
			answer:
				"VantagePeers exposes 45 MCP tools. Any MCP-compatible agent can use them. Claude is the primary use case because of the Claude Code / Claude Desktop MCP support, but the protocol is open.",
		},
		{
			question: "What happens to my data if Convex changes pricing?",
			answer:
				"You own your data. Convex has an export feature. VantagePeers is open source — the schema is documented and you can migrate to any Postgres or SQLite backend by rewriting the Convex functions. No lock-in.",
		},
	],
	fr: [
		{
			question: "VantagePeers est-il vraiment gratuit ?",
			answer:
				"Oui. Licence MIT. Vous clonez le repo, déployez sur votre propre compte Convex (généreux niveau gratuit), et c'est tout. Pas d'abonnement, pas de frais d'utilisation, pas de niveau enterprise requis.",
		},
		{
			question: "Qu'est-ce que Convex et dois-je le gérer ?",
			answer:
				"Convex est une plateforme backend temps réel. VantagePeers l'utilise comme base de données et runtime serverless. Vous déployez une fois avec `npx convex deploy` — Convex gère automatiquement la mise à l'échelle, les sauvegardes et la disponibilité. Le niveau gratuit est suffisant pour la plupart des configurations d'agents.",
		},
		{
			question:
				"En quoi est-ce différent d'un simple fichier SQLite en local ?",
			answer:
				"Trois différences clés : (1) Cross-machine — vos agents sur différentes machines partagent la mémoire. (2) Temps réel — les messages et mises à jour de tâches arrivent instantanément sans polling. (3) Structure — 13 tables typées avec relations, pas de stockage clé-valeur plat. SQLite fonctionne jusqu'à la deuxième machine.",
		},
		{
			question:
				"Puis-je l'utiliser avec n'importe quel agent IA, pas seulement Claude ?",
			answer:
				"VantagePeers expose 45 outils MCP. N'importe quel agent compatible MCP peut les utiliser. Claude est le cas d'utilisation principal en raison du support MCP de Claude Code / Claude Desktop, mais le protocole est ouvert.",
		},
		{
			question:
				"Que se passe-t-il avec mes données si Convex change ses prix ?",
			answer:
				"Vous possédez vos données. Convex a une fonctionnalité d'export. VantagePeers est open source — le schéma est documenté et vous pouvez migrer vers n'importe quel backend Postgres ou SQLite en réécrivant les fonctions Convex. Pas de dépendance.",
		},
	],
};

const sectionContent = {
	en: { title: "Frequently Asked Questions" },
	fr: { title: "Questions fréquentes" },
};

interface PeersFaqProps {
	locale: "en" | "fr";
}

export function PeersFaq({ locale }: PeersFaqProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(0);
	const t = sectionContent[locale];
	const faqList = faqs[locale];

	return (
		<section id="faq" className="py-16 md:py-24">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
						{t.title}
					</h2>
				</motion.div>

				<div className="space-y-3">
					{faqList.map((faq, index) => (
						<motion.div
							key={faq.question}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.07 }}
						>
							<Collapsible
								open={openIndex === index}
								onOpenChange={(open) => setOpenIndex(open ? index : null)}
							>
								<CollapsibleTrigger className="w-full flex items-center justify-between p-4 text-left rounded-lg bg-card border border-border hover:bg-muted/50 transition-colors">
									<span className="font-medium pr-4">{faq.question}</span>
									<ChevronDown
										className={cn(
											"size-5 text-muted-foreground shrink-0 transition-transform duration-200",
											openIndex === index && "rotate-180",
										)}
									/>
								</CollapsibleTrigger>
								<CollapsibleContent className="px-4 pt-2 pb-4 text-muted-foreground leading-relaxed">
									{faq.answer}
								</CollapsibleContent>
							</Collapsible>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
