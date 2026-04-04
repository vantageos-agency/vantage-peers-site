import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { source } from "@/lib/source";
import "fumadocs-ui/style.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default async function Layout({
	children,
	params,
}: {
	children: ReactNode;
	params: Promise<{ lang: string }>;
}) {
	const { lang } = await params;

	return (
		<html
			lang={lang}
			className={`${geistSans.variable} ${geistMono.variable} dark`}
			suppressHydrationWarning
			style={{ overflowX: "clip", overflowY: "visible" }}
		>
			<body className="antialiased" style={{ minHeight: "100dvh", overflowX: "clip", overflowY: "visible" }}>
				<RootProvider
					theme={{
						defaultTheme: "dark",
						attribute: "class",
					}}
				>
					<DocsLayout
						tree={source.getPageTree(lang)}
						nav={{
							title: "VantagePeers Docs",
							children: (
								<div style={{ marginInlineStart: "auto", display: "flex", gap: "0.75rem", alignItems: "center" }}>
									<a
										href={lang === "fr" ? "/docs/en" : "/docs/fr"}
										style={{
											fontSize: "0.75rem",
											padding: "0.25rem 0.5rem",
											borderRadius: "0.25rem",
											border: "1px solid var(--color-fd-border)",
											color: "var(--color-fd-muted-foreground)",
											textDecoration: "none",
											transition: "color 150ms",
										}}
									>
										{lang === "fr" ? "EN" : "FR"}
									</a>
									<a
										href="/"
										style={{
											fontSize: "0.875rem",
											color: "var(--color-fd-muted-foreground)",
											transition: "color 150ms",
											textDecoration: "none",
										}}
									>
										← Back to Home
									</a>
								</div>
							),
						}}
					>
						{children}
					</DocsLayout>
				</RootProvider>
			</body>
		</html>
	);
}
