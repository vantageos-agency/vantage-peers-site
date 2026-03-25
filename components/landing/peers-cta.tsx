"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const content = {
	en: {
		title: "Your agents. Your infrastructure. Zero monthly bill.",
		subtitle: "Free forever. MIT license. Deploy in 10 minutes.",
		cta: "Star on GitHub",
		secondary: "Read the docs",
		note: "No account required. No credit card. Just clone and deploy.",
	},
	fr: {
		title: "Vos agents. Votre infrastructure. Zero facture mensuelle.",
		subtitle: "Gratuit pour toujours. Licence MIT. Deploye en 10 minutes.",
		cta: "Etoiler sur GitHub",
		secondary: "Lire la documentation",
		note: "Pas de compte requis. Pas de carte bancaire. Juste cloner et deployer.",
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
					>
						<Button
							size="lg"
							className="min-h-touch text-base px-10 group gap-2"
						>
							<Star className="size-4" />
							{t.cta}
							<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
						</Button>
					</a>
					<a
						href="https://github.com/vantageos/vantage-peers#readme"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button
							variant="outline"
							size="lg"
							className="min-h-touch text-base px-8 gap-2"
						>
							<Github className="size-4" />
							{t.secondary}
						</Button>
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
