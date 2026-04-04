import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { createMDX } from "fumadocs-mdx/next";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
const withMDX = createMDX();

const nextConfig: NextConfig = {
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
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;",
          },
        ],
      },
    ];
  },
};

export default withMDX(withNextIntl(nextConfig));
