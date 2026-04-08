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
				"Yes. FSL license. You clone the repo, deploy to your own Convex account (generous free tier), and that is it. No subscription, no usage fees, no enterprise tier required.",
		},
		{
			question: "What is Convex and do I need to manage it?",
			answer:
				"Convex is a real-time backend platform. VantagePeers uses it as its database and serverless runtime. You deploy once with `npx convex deploy` — Convex handles scaling, backups, and uptime automatically. The free tier is generous enough for most agent setups.",
		},
		{
			question: "How is this different from just using a SQLite file locally?",
			answer:
				"Three key differences: (1) Cross-machine — your agents on different computers can share memory. (2) Real-time — messages and task updates arrive instantly without polling. (3) Structured — 20 typed tables with relationships, not flat key-value storage. SQLite works until your second machine.",
		},
		{
			question: "Can I use this with any AI agent, not just Claude?",
			answer:
				"VantagePeers exposes 82 MCP tools. Any MCP-compatible agent can use them. Claude is the primary use case because of the Claude Code / Claude Desktop MCP support, but the protocol is open.",
		},
		{
			question: "What happens to my data if Convex changes pricing?",
			answer:
				"You own your data. Convex has an export feature. VantagePeers is open source \u2014 the schema is documented and you can migrate to any Postgres or SQLite backend by rewriting the Convex functions. No lock-in.",
		},
		{
			question: "What is the FSL license? How is it different from MIT?",
			answer:
				"FSL (Functional Source License) is source-available: you can read, modify, and self-host the code freely. The one restriction: you cannot use it to build a competing hosted service. After 2 years, it automatically converts to Apache 2.0 \u2014 fully open source. This is the same model used by Sentry and Convex.",
		},
		{
			question: "Do you offer paid support or setup services?",
			answer:
				"Yes. Self-hosting is free forever. We offer setup packages (one-time configuration), priority support subscriptions, and custom consulting for integration and customization. See our pricing section for details.",
		},
		{
			question: "How does VantagePeers compare to mem0 or supermemory?",
			answer:
				"mem0 and supermemory focus on memory only. VantagePeers is a full coordination layer: memory + messaging + task management + mission planning + issue tracking + fix patterns KB + GitHub webhooks + session diary. It is also self-hostable on the free tier \u2014 no Enterprise plan required.",
		},
		{
			question: "What happens if you stop maintaining VantagePeers?",
			answer:
				"The FSL license converts to Apache 2.0 after 2 years automatically. The code is public, the schema is documented, and Convex deployments run independently. Your agents keep working regardless of our company\u2019s status.",
		},
		{
			question: "How many agents can it handle?",
			answer:
				"Tested with 5 orchestrators running 100+ specialized agents across multiple machines. Convex handles the scaling \u2014 it is designed for real-time workloads. The free tier supports most team setups.",
		},
		{
			question: "Is my data private?",
			answer:
				"Completely. VantagePeers is self-hosted on your own Convex deployment. Your data never touches our servers. You control the database, the API keys, and the access.",
		},
		{
			question: "Do I need to know Convex to use VantagePeers?",
			answer:
				"No deep knowledge required. You run `npx convex dev` once to set up, then interact entirely via MCP tools from Claude Code. The schema and functions are pre-built \u2014 you just deploy and connect.",
		},
	],
	fr: [
		{
			question: "VantagePeers est-il vraiment gratuit ?",
			answer:
				"Oui. Licence FSL. Vous clonez le repo, déployez sur votre propre compte Convex (généreux niveau gratuit), et c'est tout. Pas d'abonnement, pas de frais d'utilisation, pas de niveau enterprise requis.",
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
				"Trois différences clés : (1) Cross-machine — vos agents sur différentes machines partagent la mémoire. (2) Temps réel — les messages et mises à jour de tâches arrivent instantanément sans polling. (3) Structure — 20 tables typées avec relations, pas de stockage clé-valeur plat. SQLite fonctionne jusqu'à la deuxième machine.",
		},
		{
			question:
				"Puis-je l'utiliser avec n'importe quel agent IA, pas seulement Claude ?",
			answer:
				"VantagePeers expose 82 outils MCP. N'importe quel agent compatible MCP peut les utiliser. Claude est le cas d'utilisation principal en raison du support MCP de Claude Code / Claude Desktop, mais le protocole est ouvert.",
		},
		{
			question:
				"Que se passe-t-il avec mes données si Convex change ses prix ?",
			answer:
				"Vous possédez vos données. Convex a une fonctionnalité d'export. VantagePeers est open source — le schéma est documenté et vous pouvez migrer vers n'importe quel backend Postgres ou SQLite en réécrivant les fonctions Convex. Pas de dépendance.",
		},
		{
			question: "Qu'est-ce que la licence FSL ? En quoi diffère-t-elle de MIT ?",
			answer:
				"La FSL (Functional Source License) est source-available : vous pouvez lire, modifier et auto-héberger le code librement. La seule restriction : vous ne pouvez pas l'utiliser pour construire un service hébergé concurrent. Après 2 ans, elle se convertit automatiquement en Apache 2.0 — entièrement open source. C'est le même modèle utilisé par Sentry et Convex.",
		},
		{
			question: "Proposez-vous du support payant ou des services d'installation ?",
			answer:
				"Oui. L'auto-hébergement est gratuit pour toujours. Nous proposons des packages d'installation (configuration unique), des abonnements de support prioritaire, et du consulting personnalisé pour l'intégration et la personnalisation.",
		},
		{
			question: "Comment VantagePeers se compare-t-il à mem0 ou supermemory ?",
			answer:
				"mem0 et supermemory se concentrent uniquement sur la mémoire. VantagePeers est une couche de coordination complète : mémoire + messagerie + gestion de tâches + planification de missions + suivi d'issues + base de fix patterns + webhooks GitHub + journal de session. Il est aussi auto-hébergeable sur le tier gratuit — pas de plan Enterprise requis.",
		},
		{
			question: "Que se passe-t-il si vous arrêtez de maintenir VantagePeers ?",
			answer:
				"La licence FSL se convertit automatiquement en Apache 2.0 après 2 ans. Le code est public, le schéma est documenté, et les déploiements Convex fonctionnent indépendamment. Vos agents continuent de fonctionner quel que soit le statut de notre entreprise.",
		},
		{
			question: "Combien d'agents peut-il gérer ?",
			answer:
				"Testé avec 5 orchestrateurs exécutant 100+ agents spécialisés sur plusieurs machines. Convex gère la mise à l'échelle — il est conçu pour les charges de travail temps réel. Le tier gratuit suffit pour la plupart des configurations d'équipe.",
		},
		{
			question: "Mes données sont-elles privées ?",
			answer:
				"Entièrement. VantagePeers est auto-hébergé sur votre propre déploiement Convex. Vos données ne touchent jamais nos serveurs. Vous contrôlez la base de données, les clés API et les accès.",
		},
		{
			question: "Dois-je connaître Convex pour utiliser VantagePeers ?",
			answer:
				"Pas de connaissance approfondie requise. Vous exécutez `npx convex dev` une fois pour configurer, puis interagissez entièrement via les outils MCP depuis Claude Code. Le schéma et les fonctions sont pré-construits — vous déployez et connectez, c'est tout.",
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
								<CollapsibleTrigger className="w-full flex items-center justify-between p-4 text-left rounded-2xl bg-card border border-border hover:bg-muted/50 transition-colors">
									<span className="font-medium pr-4">{faq.question}</span>
									<ChevronDown
										aria-hidden="true"
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
