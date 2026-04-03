"use client";

import { Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const content = {
	en: {
		tagline: "Open-source agent memory coordination. FSL License.",
		copyright: "Perello Consulting / ElPi Corp. All rights reserved.",
		links: [
			{ label: "Features", href: "#features" },
			{ label: "How It Works", href: "#how-it-works" },
			{ label: "Compare", href: "#compare" },
			{ label: "FAQ", href: "#faq" },
		],
		legalLinks: [
			{ label: "Privacy Policy", href: "/en/privacy" },
			{ label: "Legal Notice", href: "/en/legal" },
		],
		github: "GitHub",
		switchLabel: "Français",
		lastUpdated: "Last updated: March 2026",
	},
	fr: {
		tagline: "Coordination de mémoire d’agents open-source. Licence FSL.",
		copyright: "Perello Consulting / ElPi Corp. Tous droits réservés.",
		links: [
			{ label: "Fonctionnalités", href: "#features" },
			{ label: "Comment ça marche", href: "#how-it-works" },
			{ label: "Comparer", href: "#compare" },
			{ label: "FAQ", href: "#faq" },
		],
		legalLinks: [
			{ label: "Politique de confidentialité", href: "/fr/privacy" },
			{ label: "Mentions légales", href: "/fr/legal" },
		],
		github: "GitHub",
		switchLabel: "English",
		lastUpdated: "Dernière mise à jour : mars 2026",
	},
};

interface PeersFooterProps {
	locale: "en" | "fr";
	onLocaleChange: (locale: "en" | "fr") => void;
}

export function PeersFooter({ locale, onLocaleChange }: PeersFooterProps) {
	const t = content[locale];

	return (
		<footer className="bg-card border-t border-border">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
				<div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
					{/* Logo and tagline */}
					<div>
						<a href="#hero" className="flex items-center gap-2 mb-4">
							<div className="size-8 rounded-2xl bg-foreground flex items-center justify-center">
								<span className="text-background font-bold text-lg">V</span>
							</div>
							<span className="font-semibold text-lg">
								Vantage<span className="text-muted-foreground">Peers</span>
							</span>
						</a>
						<p className="text-sm text-muted-foreground max-w-xs">
							{t.tagline}
						</p>
					</div>

					{/* Navigation */}
					<div className="flex flex-wrap gap-6">
						{t.links.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								{link.label}
							</a>
						))}
					</div>

					{/* GitHub */}
					<div className="text-sm">
						<a
							href="https://github.com/vantageos/vantage-peers"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
						>
							<Github className="size-4" />
							{t.github}
						</a>
					</div>
				</div>

				<Separator className="mb-8" />

				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					<div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
						<p className="text-sm text-muted-foreground">
							&copy; {new Date().getFullYear()} {t.copyright}
						</p>
						<div className="flex items-center gap-4">
							{t.legalLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
								>
									{link.label}
								</a>
							))}
						</div>
						<p className="text-xs text-muted-foreground">{t.lastUpdated}</p>
					</div>
					<Button
						variant="ghost"
						size="sm"
						onClick={() => onLocaleChange(locale === "en" ? "fr" : "en")}
						className="gap-1.5"
					>
						<Globe className="size-4" />
						{t.switchLabel}
					</Button>
				</div>
			</div>
		</footer>
	);
}
