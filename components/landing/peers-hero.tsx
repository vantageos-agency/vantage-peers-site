"use client";

import { motion } from "framer-motion";
import { CircleDollarSign, Clock, Database, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const content = {
	en: {
		badge: "Open-source — FSL License",
		headline: "The coordination layer for AI agent teams.",
		headlineSub: "Memory. Messaging. Tasks. Knowledge.",
		subheadline:
			"VantagePeers gives your agents shared memory, cross-machine messaging, task coordination, fix pattern knowledge base, issue tracking, and mission planning — one Convex deployment, zero monthly bills.",
		cta1: "View on GitHub",
		cta2: "See How It Works",
		stats: [
			{ value: "16", label: "DB Tables", icon: Database },
			{ value: "64", label: "MCP Tools", icon: Wrench },
			{ value: "Free", label: "FSL License", icon: CircleDollarSign },
			{ value: "<10 min", label: "Setup", icon: Clock },
		],
	},
	fr: {
		badge: "Open-source — Licence FSL",
		headline: "La couche de coordination pour \u00e9quipes d\u2019agents IA.",
		headlineSub: "M\u00e9moire. Messagerie. T\u00e2ches. Connaissances.",
		subheadline:
			"VantagePeers donne \u00e0 vos agents une m\u00e9moire partag\u00e9e, une messagerie cross-machine, une coordination de t\u00e2ches, une base de connaissances de fix patterns, un suivi d\u2019issues et une planification de missions \u2014 un d\u00e9ploiement Convex, z\u00e9ro facture mensuelle.",
		cta1: "Voir sur GitHub",
		cta2: "Comment ça marche",
		stats: [
			{ value: "16", label: "Tables BD", icon: Database },
			{ value: "64", label: "Outils MCP", icon: Wrench },
			{ value: "Gratuit", label: "Licence FSL", icon: CircleDollarSign },
			{ value: "<10 min", label: "Installation", icon: Clock },
		],
	},
};

interface PeersHeroProps {
	locale: "en" | "fr";
}

export function PeersHero({ locale }: PeersHeroProps) {
	const t = content[locale];

	return (
		<section
			id="hero"
			className="relative flex items-center justify-center overflow-hidden pt-20 pb-8 min-h-[90vh]"
		>
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />

			{/* Animated grid pattern */}
			<div
				className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
				style={{
					backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
					backgroundSize: "60px 60px",
				}}
			/>

			{/* Radial glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(900px,100vw)] h-[min(900px,100vw)] rounded-full blur-3xl opacity-20 dark:opacity-30 bg-gradient-to-br from-chart-1/20 via-transparent to-chart-3/10" />

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
				<div className="text-center max-w-4xl mx-auto">
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<Badge
							variant="secondary"
							className="mb-6 px-5 py-2 text-sm font-medium border border-border"
						>
							{t.badge}
						</Badge>
					</motion.div>

					{/* Headline */}
					<motion.h1
						className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						{t.headline}
						<br />
						<span className="text-gradient">{t.headlineSub}</span>
					</motion.h1>

					{/* Subheadline */}
					<motion.p
						className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						{t.subheadline}
					</motion.p>

					{/* CTAs */}
					<motion.div
						className="flex flex-col sm:flex-row items-center justify-center gap-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<a
							href="https://github.com/vantageos/vantage-peers"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center gap-2 min-h-touch text-base px-8 rounded-4xl font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring glow-on-hover group"
						>
							<svg
								aria-hidden="true"
								className="size-4 mr-2"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
							</svg>
							{t.cta1}
							<svg
								aria-hidden="true"
								className="ml-2 size-4 transition-transform group-hover:translate-x-1"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M5 12h14M12 5l7 7-7 7" />
							</svg>
						</a>
						<a
							href="#how-it-works"
							className="inline-flex items-center justify-center min-h-touch text-base px-8 rounded-4xl font-medium border border-border bg-background text-foreground hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
						>
							{t.cta2}
						</a>
					</motion.div>

					{/* Stats row */}
					<motion.div
						className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						{t.stats.map((stat) => (
							<div key={stat.label} className="text-center">
								<div className="flex items-center justify-center mb-2">
									<stat.icon className="size-5 text-muted-foreground mr-2" aria-hidden="true" />
									<span className="text-3xl font-bold tabular-nums">
										{stat.value}
									</span>
								</div>
								<p className="text-sm text-muted-foreground">{stat.label}</p>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
