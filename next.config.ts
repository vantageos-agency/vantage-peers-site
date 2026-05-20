import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
const withMDX = createMDX();

const nextConfig: NextConfig = {
	async redirects() {
		return [
			// P0-T2: block direct /docs/en/* access — 308 to canonical /docs/*
			{
				source: '/docs/en',
				destination: '/docs',
				permanent: true,
			},
			{
				source: '/docs/en/:path*',
				destination: '/docs/:path*',
				permanent: true,
			},
			// P0-T4: /en/* → /* permanent (308) so Googlebot transfers full PageRank
			{
				source: '/en/:path*',
				destination: '/:path*',
				permanent: true,
			},
			{
				source: '/en',
				destination: '/',
				permanent: true,
			},
			// P1-T4: /fr/docs/* → /docs/fr/* permanent
			{
				source: '/fr/docs',
				destination: '/docs/fr',
				permanent: true,
			},
			{
				source: '/fr/docs/:path*',
				destination: '/docs/fr/:path*',
				permanent: true,
			},
		];
	},
	async rewrites() {
		return {
			beforeFiles: [
				// Docs i18n: /docs → /docs/en (default locale)
				{
					source: "/docs",
					destination: "/docs/en",
				},
				// /docs/fr/* stays as-is (matched by [lang])
				// /docs/* (non-fr) → /docs/en/* for backwards compatibility
				{
					source: "/docs/:path((?!en|fr).*)",
					destination: "/docs/en/:path*",
				},
			],
			afterFiles: [
				{
					source: "/docs/:path*.mdx",
					destination: "/llms.mdx/docs/:path*",
				},
			],
		};
	},
	async headers() {
		return [
			// P0-G1: force text/plain for AI crawler txt files — prevents CDN/proxy
			// from serving them as text/html if a rewrite ever intercepts the path.
			// Middleware matcher already excludes these paths, but belt-and-suspenders.
			{
				source: "/llms.txt",
				headers: [{ key: "Content-Type", value: "text/plain; charset=utf-8" }],
			},
			{
				source: "/llms-full.txt",
				headers: [{ key: "Content-Type", value: "text/plain; charset=utf-8" }],
			},
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "Referrer-Policy",
						value: "strict-origin-when-cross-origin",
					},
					{
						key: "Permissions-Policy",
						value: "camera=(), microphone=(), geolocation=()",
					},
					{
						// P1-T2: add includeSubDomains + preload for HSTS preload list eligibility
						key: "Strict-Transport-Security",
						value: "max-age=63072000; includeSubDomains; preload",
					},
					{
						// P1-T3: append frame-ancestors 'none' to block framing attacks
						// TODO: remove 'unsafe-inline' + 'unsafe-eval' in a follow-up nonces refactor
						key: "Content-Security-Policy",
						value:
							"default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://plausible.io https:; frame-ancestors 'none';",
					},
				],
			},
		];
	},
};

export default withMDX(withNextIntl(nextConfig));
