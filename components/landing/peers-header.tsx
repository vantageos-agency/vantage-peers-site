"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Globe, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = {
	en: [
		{ label: "Features", href: "#features" },
		{ label: "How It Works", href: "#how-it-works" },
		{ label: "Compare", href: "#compare" },
		{ label: "FAQ", href: "#faq" },
		{ label: "Docs", href: "/docs" },
	],
	fr: [
		{ label: "Fonctionnalités", href: "#features" },
		{ label: "Comment ça marche", href: "#how-it-works" },
		{ label: "Comparer", href: "#compare" },
		{ label: "FAQ", href: "#faq" },
		{ label: "Docs", href: "/docs" },
	],
};

const headerContent = {
	en: {
		github: "GitHub",
		langLabel: "FR",
		githubLabel: "View on GitHub",
		toggleThemeLabel: "Toggle theme",
		openMenuLabel: "Open menu",
	},
	fr: {
		github: "GitHub",
		langLabel: "EN",
		githubLabel: "Voir sur GitHub",
		toggleThemeLabel: "Changer de thème",
		openMenuLabel: "Ouvrir le menu",
	},
};

interface PeersHeaderProps {
	locale: "en" | "fr";
	onLocaleChange: (locale: "en" | "fr") => void;
}

export function PeersHeader({ locale, onLocaleChange }: PeersHeaderProps) {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const t = headerContent[locale];
	const links = navLinks[locale];

	useEffect(() => {
		const timer = setTimeout(() => setMounted(true), 0);
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			clearTimeout(timer);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape" && isMobileMenuOpen) {
				setIsMobileMenuOpen(false);
			}
		};
		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [isMobileMenuOpen]);

	const toggleLocale = () => {
		onLocaleChange(locale === "en" ? "fr" : "en");
	};

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300",
				isScrolled
					? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
					: "bg-transparent",
			)}
		>
			<nav
				aria-label={locale === "fr" ? "Navigation principale" : "Main navigation"}
				className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
			>
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Logo */}
					<a href="#hero" className="flex items-center gap-2 group min-h-[44px]">
						<div className="size-8 rounded-lg bg-foreground flex items-center justify-center transition-transform group-hover:scale-105">
							<span className="text-background font-bold text-lg">V</span>
						</div>
						<span className="font-semibold text-lg tracking-tight">
							Vantage<span className="text-muted-foreground">Peers</span>
						</span>
					</a>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-1">
						{links.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
							>
								{link.label}
							</a>
						))}
					</div>

					{/* Desktop CTA */}
					<div className="hidden md:flex items-center gap-2">
						{mounted && (
							<Button
								variant="ghost"
								size="sm"
								onClick={toggleTheme}
								className="size-11 p-0"
								aria-label={t.toggleThemeLabel}
							>
								{theme === "dark" ? (
									<Sun className="size-4" aria-hidden="true" />
								) : (
									<Moon className="size-4" aria-hidden="true" />
								)}
							</Button>
						)}
						<Button
							variant="ghost"
							size="sm"
							onClick={toggleLocale}
							className="gap-1.5 min-h-[44px]"
						>
							<Globe className="size-4" aria-hidden="true" />
							{t.langLabel}
						</Button>
						<a
							href="https://github.com/vantageos/vantage-peers"
							target="_blank"
							rel="noopener noreferrer"
							aria-label={t.githubLabel}
							className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium min-h-[44px] px-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
						>
							<svg
								aria-hidden="true"
								className="size-4"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
							</svg>
							{t.github}
						</a>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center gap-1">
						{mounted && (
							<button
								type="button"
								className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground"
								onClick={toggleTheme}
								aria-label={t.toggleThemeLabel}
							>
								{theme === "dark" ? (
									<Sun className="size-5" aria-hidden="true" />
								) : (
									<Moon className="size-5" aria-hidden="true" />
								)}
							</button>
						)}
						<button
							type="button"
							className="p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							aria-expanded={isMobileMenuOpen}
							aria-controls="mobile-menu"
						>
							<span className="sr-only">{t.openMenuLabel}</span>
							{isMobileMenuOpen ? (
								<X className="size-6" aria-hidden="true" />
							) : (
								<Menu className="size-6" aria-hidden="true" />
							)}
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						id="mobile-menu"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
					>
						<div className="px-4 py-4 space-y-1">
							{links.map((link) => (
								<a
									key={link.href}
									href={link.href}
									className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{link.label}
								</a>
							))}
							<div className="pt-4 space-y-2">
								<Button
									variant="outline"
									className="w-full min-h-touch"
									onClick={() => {
										toggleLocale();
										setIsMobileMenuOpen(false);
									}}
								>
									<Globe className="size-4 mr-2" aria-hidden="true" />
									{t.langLabel}
								</Button>
								<a
									href="https://github.com/vantageos/vantage-peers"
									target="_blank"
									rel="noopener noreferrer"
									aria-label={t.githubLabel}
									className="flex items-center justify-center gap-2 w-full min-h-touch rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring px-4 py-2"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									<svg
										aria-hidden="true"
										className="size-4"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
									</svg>
									{t.github}
								</a>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
