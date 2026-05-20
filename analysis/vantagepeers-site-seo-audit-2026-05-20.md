# VantagePeers Site — SEO / GEO Consolidated Audit

*Date: 2026-05-20 · Mission: `sigma-vantagepeers-site-seo-uplift-v1` (k5775e7p8n4x7n4z093cyhfadd872kag) · Pilot: Sigma*

## Synthesis

Ahrefs Health Score **55** (25 errors / 31 warnings / 29 notices / 54 URLs).
Fleet standard 91-100. Mission target ≥ 90.

Five-angle audit (seo-technical, seo-content, seo-performance, seo-schema, geo-technical) maps the 25 Ahrefs errors as follows:

| Angle | Errors found | Maps to Ahrefs errors |
|---|---|---|
| Technical SEO | 18 P0 + 8 P1 + 4 P2 | ~18 of 25 |
| Content | 3 P0 + 4 P1 + 3 P2 | ~6-9 of 25 |
| Schema | 5 P0 + 3 P1 + 3 P2 | 1-2 of 25 |
| Performance | 3 P0 + 3 P1 + 3 P2 | 1 of 25 (redirect chain) |
| GEO | 2 P0 + 3 P1 + 4 P2 | 0 of 25 (out of Ahrefs scope) |

Total P0 errors across all angles: **31** (Ahrefs visible + structural gaps Ahrefs misses).

Projected post-fix Health Score after P0+P1: **88-92**. P2 batch pushes to **95+**. Lighthouse Performance projection post-P0 perf fixes: **92-95**.

---

## P0 — Errors (must fix before re-audit)

### P0-T1 — Sitemap omits 24 FR docs + zero `<xhtml:link>` hreflang alternates

`app/sitemap.ts` lines 55-68 list only 11 URLs. Includes 7 EN `/docs/*` slugs with zero `xhtml:link` alternates. The 24 FR docs pages at `/docs/fr/*` (confirmed HTTP 200 live) are absent entirely. Googlebot has no signal to discover, index, or attribute ~48 locale-paired docs URLs.

**Fix:** enumerate all docs pages from `source.generateParams()` in `sitemap.ts`. Each EN slug at `/docs/[slug]` pairs `alternates.languages.fr → /docs/fr/[slug]`. Add 24 FR docs URLs as separate `<url>` entries with reciprocal alternates. Result: ~59 URLs (close to Ahrefs' 54).

Ahrefs category: *Hreflang issues / Missing hreflang*.

### P0-T2 — `/docs/*` pages serve no canonical + no hreflang → duplicate content

`app/docs/[lang]/[[...slug]]/page.tsx` `generateMetadata()` (lines 43-54) sets only `title` and `description`. No `alternates.canonical`, no `alternates.languages`. The Next.js rewrite maps `/docs/getting-started` → `/docs/en/getting-started` (confirmed via `x-nextjs-rewritten-path`). Both URLs return HTTP 200 with identical content. Googlebot can index both.

**Fix:** add to `generateMetadata()`:
```ts
alternates: {
  canonical: `https://www.vantagepeers.com/docs/${params.slug?.join('/') ?? ''}`,
  languages: { en: `…/docs/en/…`, fr: `…/docs/fr/…` }
}
```
Optionally block `/docs/en/*` from direct access (redirect to canonical `/docs/*`).

Ahrefs category: *Duplicate content / Missing canonical*.

### P0-T3 — Homepage links `/en/privacy` + `/en/legal` trigger 307 (the "Page has links to redirect: 4 URLs" finding)

Homepage HTML contains `href="/en/privacy"` and `href="/en/legal"`. Both return HTTP 307 to `/privacy` and `/legal`. Same pattern from `/fr` homepage to `/fr/legal` and `/fr/privacy`. Total = 4 internal links → redirect, matching Ahrefs' email flag exactly.

**Fix:** find the footer/nav component, change `href="/en/privacy"` → `href="/privacy"` and `href="/en/legal"` → `href="/legal"`. For FR pages, links should be `/fr/privacy` and `/fr/legal`.

Ahrefs category: *Page has links to redirect*.

### P0-T4 — `/en/*` and `/en/docs` redirect via 307 (temporary), not 308 (permanent)

`/en` → 307 `/`, `/en/pricing` → 307 `/pricing`, `/en/docs` → 307 `/docs`. HTTP 307 = temporary. Googlebot does not transfer full PageRank through temporary redirects.

**Fix:** override next-intl middleware to issue 308 for locale stripping, or add Vercel `redirects()` in `next.config.ts` for `/en/:path*` → `/:path*` with `permanent: true`.

Ahrefs category: *Redirect chains / 3xx redirect*.

### P0-C1 — Hero stat inconsistency: `75` vs `82` MCP tools

`peers-hero.tsx` lines 18/31 hardcode `"75"`. Every other surface (features, pricing, FAQ, structured data, docs) says `82`. LLMs and crawlers reading the hero will cite a wrong number.

**Fix:** update hero stat from `"75"` to `"82"` in both `en` and `fr` blocks.

### P0-C2 — EN home meta description below 120 chars

Current description = 112 chars. Google rewrites sub-120 descriptions automatically.

**Fix:** expand to 130-155 chars. Suggestion: append "Supports Claude Code, any MCP-compatible agent."

### P0-C3 — Missing FR translations for two doc pages

`/fr/docs/getting-started/deploy-keys` and `/fr/docs/core-concepts/multi-tenancy` have no `.fr.mdx` file. These pages 404 or fall back to English inside a French docs tree, breaking locale parity.

**Fix:** create `.fr.mdx` counterparts or configure explicit fallback.

### P0-S1 — Schema `@id` fragmentation: www vs non-www split

`components/landing/structured-data.tsx` line 1 uses `"https://vantagepeers.com"` (no www). `components/railway/railway-structured-data.tsx` line 1 and `app/[locale]/layout.tsx` line 11 use `"https://www.vantagepeers.com"` (with www). Landing schema emits `@id: "https://vantagepeers.com/#organization"`; Railway WebPage references `isPartOf: { "@id": "https://www.vantagepeers.com/#website" }`. These IDs do not resolve to the same graph node. Rich Results validator treats them as disconnected entities.

**Fix:** unify on `https://www.vantagepeers.com` everywhere (matches the canonical and live HTTPS cert).

### P0-S2 — `FAQPage` restricted type still emitted on landing

Google restricted FAQPage rich results to government/health authority sites since August 2023. The standalone `FAQPage` block on every locale layout will not produce rich results and may trigger a GSC notice. FAQ content is already in `WebPage.mainEntity` as `Question`/`Answer` pairs — the FAQPage is redundant + risky.

**Fix:** remove the FAQPage block; keep mainEntity Q&A pairs in WebPage.

### P0-S3 — `HowTo` deprecated rich result on Railway page

HowTo rich results removed by Google in September 2023. The HowTo block in `railway-structured-data.tsx` will never produce a rich result.

**Fix:** remove the HowTo block.

### P0-S4 — `HowTo` deprecated rich result on Team landing

Same deprecation, different component.

**Fix:** remove the HowTo block.

### P0-S5 — Organization `logo` ImageObject missing required `width`/`height`

Google requires both for the logo rich result to be eligible.

**Fix:** add `width` and `height` to the ImageObject.

### P0-P1 — TBT 1,140 ms on `/en` (framer-motion fully SSR'd, no code splitting)

`landing-page.tsx` is `"use client"` and statically imports all 10 section components. Each pulls in `framer-motion`. Main thread evaluation: ~999 ms scripting on the largest chunk.

**Fix:** convert below-fold sections (`PeersProblem`, `PeersFeatures`, `PeersHowItWorks`, `PeersComparison`, `PeersCode`, `PeersPricing`, `PeersFaq`, `PeersCta`) to `dynamic(() => import(...), { ssr: false })`. Keep `PeersHero` and `PeersHeader` static. Expected TBT reduction: 600-800 ms.

### P0-P2 — `/` → `/en` redirect costs 882 ms on LCP

Root URL `/` redirects to `/en`. Lighthouse audit `redirects` records the 882 ms penalty on every entry.

**Fix:** serve the default locale at `/` without redirect — next-intl `localePrefix: 'as-needed'` or `'never'` for the default locale. Recovers ~880 ms.

### P0-P3 — Hero `<h1>` LCP delayed by JS hydration (3.2 s)

Hero `<h1>` wrapped in `motion.h1` with `initial={{ opacity: 0, y: 20 }}`. Browser cannot paint it until framer-motion hydrates. LCP gated on full JS bundle.

**Fix:** either render `<h1>` in a static Server Component without animation wrapper, OR set `initial={{ opacity: 1 }}` so the element is paint-visible immediately.

### P0-G1 — `/llms.txt` 404 in production despite repo route

Repo has `app/llms.txt/route.ts` (fumadocs-core `llms()` index) and `app/llms-full.txt/route.ts` (flat markdown dump). Neither reaches the crawler — both return doc HTML rather than `text/plain`. Delivery failure, not authoring gap.

**Fix:** verify Next.js is not treating these as pages, and that Vercel/hosting config is not intercepting. Add curl smoke `-H "Accept: text/plain"` to CI.

### P0-G2 — Bingbot has no explicit allow in `app/robots.ts`

Other AI crawlers (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended) are explicitly allowed. Bingbot only inherits the default. Bing Copilot relies on Bingbot — no explicit signal is a gap.

**Fix:** add Bingbot to the explicit allowlist in `app/robots.ts`.

---

## P1 — Warnings

### P1-T1 — Hreflang trailing-slash mismatch (canonical vs HTTP Link header)

HTML canonical = `https://www.vantagepeers.com` (no slash). HTTP `Link` header hreflang EN = `https://www.vantagepeers.com/` (with slash). Google treats them as different URLs.

**Fix:** replace HTTP header reliance with `<link rel="alternate">` in `<head>` for the homepage.

### P1-T2 — HSTS header missing `includeSubDomains` and `preload`

Current: `strict-transport-security: max-age=63072000`.

**Fix:** `next.config.ts` headers → `strict-transport-security: max-age=63072000; includeSubDomains; preload`. Submit to hstspreload.org.

### P1-T3 — CSP uses `unsafe-inline` + `unsafe-eval`, no `frame-ancestors`

`script-src 'self' 'unsafe-inline' 'unsafe-eval'` neutralizes XSS benefit. `frame-ancestors` directive absent → relies on deprecated `X-Frame-Options`.

**Fix:** add `frame-ancestors 'none'` to CSP. Plan nonces for unsafe-inline removal (larger refactor).

### P1-T4 — `/fr/docs` and `/fr/docs/*` return 404

FR docs content exists under `content/docs/*.fr.mdx`. `/docs/fr/*` works. But `/fr/docs` returns 404 because the middleware matcher excludes `docs` from next-intl processing.

**Fix:** add redirect `/fr/docs` → `/docs/fr` in `next.config.ts`, or create an `app/[locale]/docs/` page that redirects.

### P1-C1 — Thin doc pages (components registry, 128 / 142 words)

`/en/docs/infrastructure/components` and its FR equivalent — below the 300-word floor.

**Fix:** add "Why use it" paragraph + one code example.

### P1-C2 — Seven doc pages have meta descriptions under 100 chars

Components (59 chars), recurring-tasks (55), docs index (100), add-orchestrator (82).

**Fix:** expand each to 120-155 chars with a concrete use-case phrase.

### P1-C3 — Founder/Experience signal absent from main content

Founder name + credibility only in legal pages + JSON-LD. Landing has zero first-person experience signals.

**Fix:** add a 1-2 sentence founder note beneath the CTA or in the footer nav.

### P1-C4 — No dedicated `/en/pricing` route

Pricing lives as `#pricing` anchor. Brief lists `/en/pricing` as a target. If linked anywhere, this 404s.

**Fix:** confirm references; if any, add redirect or thin standalone page.

### P1-S1 — `BreadcrumbList` absent from landing + docs

Only inline on Railway WebPage. Main landing and docs have none. Direct Ahrefs structured-data notice category.

**Fix:** add BreadcrumbList to docs layout + main landing.

### P1-S2 — `WebSite.potentialAction` (SearchAction) absent

`webSiteSchema` defines `@type: WebSite` with no `potentialAction`. The `/api/search` route exists in the repo. Adding SearchAction unlocks Google Sitelinks Search Box.

**Fix:** add `potentialAction` pointing to `/api/search?q={search_term_string}`.

### P1-S3 — Docs pages missing `TechArticle` / `Article` schema

Each fumadocs page is a standalone technical document with no structured data. Adding `TechArticle` with `headline`, `datePublished`, `dateModified`, `author` would unlock article rich results and AI citation signals.

**Fix:** inject TechArticle in the docs page layout.

### P1-P1 — No `<link rel="preconnect" href="https://plausible.io">` (315 ms wasted)

Plausible script `strategy="afterInteractive"` runs without preconnect.

**Fix:** add preconnect link in `<head>`.

### P1-P2 — Two render-blocking CSS chunks

`2473c16c0c2f6b5f.css` (894 B) and `47b2210025c9d380.css` (13 KB). Possibly Turbopack dev artifact — confirm production build is deployed.

**Fix:** verify `next build` runs in production mode (no Turbopack artifacts in prod deploy).

### P1-P3 — Legacy polyfills shipped (14 KB wasted)

`Array.prototype.at`, `Array.prototype.flat` polyfills present.

**Fix:** set modern `browserslist` targets in `package.json`.

### P1-G1 — Dated statistics absent from content pages

Hero says "82 MCP tools", "20 tables", "<10 min setup", "$0/month" without dates. LLM citing these claims cannot attribute time.

**Fix:** add "As of May 2026, VantagePeers ships 82 MCP tools across 20 database tables." on hero or features section.

### P1-G2 — No explicit `as-of` attribution line on any content page

No sentence form that an LLM can lift verbatim as a time-stamped claim.

**Fix:** add attribution lines on pricing comparison + key features blocks.

### P1-G3 — `softwareVersion` hardcoded `"1.0.0"` (repo at v2.2.0)

JSON-LD `SoftwareApplication.softwareVersion` is stale. Factual mismatch surfaced to AI crawlers.

**Fix:** read from `package.json` or a version constant at build time.

---

## P2 — Notices + Improvements

### P2-T1 — Sitemap `lastModified` uses `new Date()` (build time) for every URL

Stale crawl budget signal.

**Fix:** read frontmatter `lastModified` from MDX for docs; hardcode or pull from git log for static pages.

### P2-T2 — No `x-default` hreflang for `/privacy` HTTP Link header

Homepage has x-default; privacy page lacks it.

**Fix:** add `"x-default": baseUrl + "/privacy"` in sitemap alternates.

### P2-T3 — Plausible analytics script has redundant `defer` + `strategy="afterInteractive"`

**Fix:** remove `defer`; `strategy="afterInteractive"` is sufficient.

### P2-T4 — `robots.ts` AI crawler stanzas redundant (Allow without Disallow = default-allow)

**Fix:** consolidate to wildcard `Allow: /` rules.

### P2-C1 — No glossary or definition section

Terms "MCP server", "FSL license", "semantic memory", "Convex deployment" used without definition.

**Fix:** inline tooltips or short definitions section.

### P2-C2 — FAQ not semantically connected to main copy

12 FAQ entries are quotable but at the bottom of a long page. LLM summarizing may hit token limits before FAQ.

**Fix:** move 1-2 key Q&A into hero/problem section as inline callouts.

### P2-C3 — Comparison table lacks verification date

Footnote "Zep Community Edition no longer maintained as of 2024" — no global date stamp.

**Fix:** add "Last verified: May 2026" footer to comparison block.

### P2-S1 — Organization `sameAs` missing product GitHub repo

`https://github.com/vantageos-agency/vantage-peers` referenced in `SoftwareApplication.downloadUrl` but not in `Organization.sameAs`.

**Fix:** add the product repo to Organization sameAs.

### P2-S2 — `SoftwareApplication.aggregateRating` absent

Unlocks star-rating rich result in SERPs once testimonials are formalized.

**Fix:** wire up when first verified review exists.

### P2-S3 — `softwareVersion` hardcoded `"1.0.0"` (same as P1-G3 from a schema lens)

**Fix:** dynamic value from `package.json`.

### P2-P1 — Font preload hints check

`next/font/google` should auto-inject. Verify in live HTML head.

### P2-P2 — Framer-motion on static decorations

Animated grid pattern, radial glow, background gradients use `motion.*` wrappers but don't animate. Replace with standard HTML + CSS.

### P2-P3 — `dom-size` at 866 elements (below warning threshold but worth tracking)

### P2-G1 — `llms.txt` content quality (after delivery is fixed)

Current `app/llms.txt/route.ts` uses fumadocs `index()` → URL-and-title index. `llms-full.txt` returns full markdown — preferred for AI ingestion.

**Fix:** confirm both paths are publicized; consider richer content in `llms.txt`.

### P2-G2 — No `datePublished` / `dateModified` on doc pages emitted in `llms-full.txt`

**Fix:** include frontmatter dates in the emitted blocks.

### P2-G3 — `/en/pricing` returns 404 (pricing-page citation gap, also flagged P1-C4)

### P2-G4 — Plausible defer-flag noise (also P2-T3)

---

## Cible Health Score post-fix

| Bucket | Items | Expected delta |
|---|---|---|
| P0 batch (technical + content + schema) | 12 items | +30 pts (55 → 85) |
| P1 batch | 12 items | +5 pts (85 → 90) |
| P2 batch | 13 items | +5 pts (90 → 95) |
| Lighthouse Performance (P0-P1 + P0-P2 + P0-P3 + P1-P1) | 4 items | 69-74 → 92-95 |

**Cible mission ≥ 90 atteignable avec P0 + P1**. P2 push à 95+.

## Sources et angles d'audit

- seo-technical : crawlability, indexability, canonical, hreflang, robots, sitemap, redirects, security headers.
- seo-content : E-E-A-T, depth, readability, heading hierarchy, thin content, AI citation, locale parity, meta quality.
- seo-performance : Lighthouse mobile / Core Web Vitals (LCP 3.2 s, TBT 1140 ms, CLS 0.001).
- seo-schema : JSON-LD inventory + validation + missing high-value types.
- geo-technical : AI crawler access (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Bingbot), llms.txt, citability, sameAs.

## Next step

T2 fix plan dispatch (Pi review du présent doc + APPROVED / REVISE).
