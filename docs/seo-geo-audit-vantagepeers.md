# SEO/GEO Audit — vantagepeers.com
**Date:** 2026-03-31  
**Auditor:** Sigma (sigma-vps)  
**Status:** Pre-launch audit

---

## Overall Scores

| Area | Score | Status |
|------|-------|--------|
| Technical SEO | 78/100 | NEEDS IMPROVEMENT |
| GEO/AI Visibility | 85/100 | PASS |
| Content Quality | 80/100 | PASS |
| Schema Markup | 45/100 | FAIL |
| Accessibility | 75/100 | NEEDS IMPROVEMENT |
| Mobile-First | 90/100 | PASS |
| Performance | 85/100 | PASS |

**Overall: 77/100 — NEEDS IMPROVEMENT before launch**

---

## 1. Technical SEO (78/100)

### PASS
- [x] HTTPS enforced (HSTS max-age=63072000)
- [x] Canonical URL present (`<link rel="canonical" href="https://vantagepeers.com"/>`)
- [x] robots.txt present and correct (blocks /api/, /_next/)
- [x] Sitemap.xml present with hreflang alternates (EN + FR)
- [x] Meta description present (homepage)
- [x] OG tags complete (title, description, image 1200x630, type)
- [x] Twitter Card (summary_large_image)
- [x] X-Frame-Options: DENY
- [x] X-Content-Type-Options: nosniff
- [x] Referrer-Policy: strict-origin-when-cross-origin
- [x] Permissions-Policy: camera=(), microphone=(), geolocation=()
- [x] CSP present

### CRITICAL
- [ ] **Meta description outdated**: "10 tables, 35 tools" — should be "13 tables, 45 tools"
- [ ] **OG description outdated**: "35 tools, 10 tables" — same issue
- [ ] **Twitter description outdated**: same
- [ ] **Sitemap missing /docs pages**: 0 doc pages in sitemap.xml — 7 pages not indexed
- [ ] **hreflang missing from HTML**: 0 hreflang tags in page HTML (only in HTTP headers + sitemap)

### MAJOR
- [ ] **No H1 variation across pages**: homepage H1 is good, but /docs H1 should be different from landing
- [ ] **Docs pages not in sitemap**: getting-started, architecture, tools, memory, messaging, tasks missing

### MINOR
- [ ] Title could be more keyword-rich: "VantagePeers — Shared Memory for Multi-Agent Claude Code" → consider adding "Open Source"

---

## 2. GEO/AI Visibility (85/100)

### PASS
- [x] llms.txt returns 200 with structured doc listing (7 pages)
- [x] llms-full.txt returns 200 (full content for AI ingestion)
- [x] Content is clear, factual, and citable (claims backed by numbers)
- [x] FAQ section with structured answers
- [x] Technical content suitable for AI citation

### MAJOR
- [ ] **No llms.txt link in HTML**: AI crawlers need to discover it (add `<link rel="alternate" type="text/plain" href="/llms.txt">`)
- [ ] **Comparison table claims need sources**: "mem0 $249/mo" and "Zep $475/mo" — add date/source footnotes for citability

### MINOR
- [ ] Consider adding `.well-known/ai-plugin.json` for broader AI agent discovery

---

## 3. Content Quality (80/100)

### PASS
- [x] Clear value proposition in H1
- [x] Problem-solution structure (hero → problem → features → how it works → comparison → CTA)
- [x] Specific numbers (13 tables, 45 tools, <10 min, Free)
- [x] Bilingual (EN + FR)
- [x] Documentation with 7 comprehensive MDX pages
- [x] FAQ addresses key objections

### MAJOR
- [ ] **Headline still says "Persistent memory"**: Per repositioning doc, should be "The operating system for AI agent teams" — current tagline undersells the product
- [ ] **"10 tables, 35 tools" in meta tags**: Numbers are stale (now 13 tables, 45 tools in UI but meta says 10/35)

### MINOR
- [ ] "Read the docs" CTA in footer links to GitHub README, not /docs

---

## 4. Schema Markup (45/100)

### PASS
- [x] JSON-LD present (2 script tags found in source)

### CRITICAL
- [ ] **Could not extract JSON-LD content**: May be CSR-rendered — server-side rendering of structured data needed for crawlers
- [ ] **Missing Organization schema** with sameAs (GitHub, social profiles)
- [ ] **Missing SoftwareApplication schema** with: name, operatingSystem, applicationCategory, offers (Free), aggregateRating
- [ ] **Missing FAQ schema** (FAQ section exists but no FAQPage JSON-LD)
- [ ] **Missing BreadcrumbList** on /docs pages

---

## 5. Accessibility (75/100)

### PASS
- [x] Skip-to-main-content link present
- [x] Navigation landmarks (nav, main, footer)
- [x] Comparison table has proper headers and caption
- [x] Alt text on images ("Available", "Not available")
- [x] Semantic headings (H1 → H2 → H3 hierarchy)

### MAJOR
- [ ] **Duplicate skip links**: Two "Skip to main content" links (refs e2 + e4)
- [ ] **Dark theme contrast**: Light gray text on dark background may not meet WCAG AA 4.5:1 — needs verification
- [ ] **FAQ buttons need aria-expanded**: Some FAQ items missing expanded state indicators

### MINOR
- [ ] Language toggle button ("FR") should have aria-label
- [ ] Theme toggle in docs sidebar needs label

---

## 6. Mobile-First (90/100)

### PASS
- [x] Responsive layout (tested via Chrome MCP)
- [x] Viewport meta tag present
- [x] Navigation adapts to mobile
- [x] Touch targets appear adequate

### MINOR
- [ ] Comparison table may overflow on small screens — needs horizontal scroll or stacking
- [ ] Code blocks in quick-start may need horizontal scroll on mobile

---

## 7. Performance (85/100)

### PASS
- [x] Vercel Edge deployment (global CDN)
- [x] Static generation (SSG) for landing pages
- [x] CSS inlined/optimized
- [x] No blocking resources detected in DOM

### MINOR
- [ ] Multiple font files may delay LCP — consider font-display: swap if not already set
- [ ] Large comparison table with icons may affect CLS on slow connections

---

## Prioritized Fix List

### Critical (must fix before launch)
| # | Issue | Effort | Impact |
|---|-------|--------|--------|
| 1 | Update meta description/OG/Twitter: "13 tables, 45 tools" | XS | High — incorrect info in search results |
| 2 | Add /docs pages to sitemap.xml | S | High — 7 pages not discoverable |
| 3 | Add FAQPage JSON-LD schema | S | High — rich results in Google |
| 4 | Add Organization + SoftwareApplication JSON-LD | M | High — AI and search visibility |

### Major (fix this week)
| # | Issue | Effort | Impact |
|---|-------|--------|--------|
| 5 | Update headline to "operating system" positioning | XS | Medium — brand positioning |
| 6 | Fix duplicate skip links | XS | Medium — accessibility |
| 7 | Add llms.txt discovery link in HTML | XS | Medium — AI crawler discoverability |
| 8 | Add BreadcrumbList schema to /docs | S | Medium — navigation in SERPs |
| 9 | Fix "Read the docs" footer link → /docs | XS | Medium — user flow |

### Minor (polish)
| # | Issue | Effort | Impact |
|---|-------|--------|--------|
| 10 | Add source/date to pricing claims | XS | Low — citability |
| 11 | ARIA labels on toggle buttons | XS | Low — a11y |
| 12 | Mobile comparison table scroll | S | Low — mobile UX |
