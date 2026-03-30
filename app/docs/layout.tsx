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

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="en"
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
						tree={source.pageTree}
						nav={{
							title: "VantagePeers Docs",
							children: (
								<a
									href="/"
									style={{
										marginInlineStart: "auto",
										fontSize: "0.875rem",
										color: "var(--color-fd-muted-foreground)",
										transition: "color 150ms",
										textDecoration: "none",
									}}
								>
									← Back to Home
								</a>
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
