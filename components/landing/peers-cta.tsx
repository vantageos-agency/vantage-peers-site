"use client";

import { motion } from "framer-motion";

const content = {
	en: {
		title: "Your agents. Your infrastructure. Zero monthly bill.",
		subtitle: "Free forever. FSL license. Deploy in 10 minutes.",
		cta: "Star on GitHub",
		secondary: "Read the docs",
		note: "No account required. No credit card. Just clone and deploy.",
	},
	fr: {
		title: "Vos agents. Votre infrastructure. Zéro facture mensuelle.",
		subtitle: "Gratuit pour toujours. Licence FSL. Déployé en 10 minutes.",
		cta: "Étoiler sur GitHub",
		secondary: "Lire la documentation",
		note: "Pas de compte requis. Pas de carte bancaire. Juste cloner et déployer.",
	},
};

interface PeersCtaProps {
	locale: "en" | "fr";
}

export function PeersCta({ locale }: PeersCtaProps) {
	const t = content[locale];

	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
						{t.title}
					</h2>
					<p className="text-lg text-muted-foreground mb-12">{t.subtitle}</p>
				</motion.div>

				<motion.div
					className="flex flex-col sm:flex-row items-center justify-center gap-4"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<a
						href="https://github.com/vantageos/vantage-peers"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center gap-2 min-h-touch text-base px-10 rounded-4xl font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
					>
						<svg
							aria-hidden="true"
							className="size-4"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
						</svg>
						{t.cta}
						<svg
							aria-hidden="true"
							className="size-4 transition-transform group-hover:translate-x-1"
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
						href="https://github.com/vantageos/vantage-peers#readme"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center gap-2 min-h-touch text-base px-8 rounded-4xl font-medium border border-border bg-background text-foreground hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
					>
						<svg
							aria-hidden="true"
							className="size-4"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
						</svg>
						{t.secondary}
					</a>
				</motion.div>

				<motion.p
					className="mt-8 text-sm text-muted-foreground"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					{t.note}
				</motion.p>
			</div>
		</section>
	);
}
