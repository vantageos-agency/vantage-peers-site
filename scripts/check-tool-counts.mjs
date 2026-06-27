#!/usr/bin/env node
/**
 * check-tool-counts.mjs — site-repo mirror.
 *
 * CANONICAL SOURCE: vantageos-agency/vantage-peers
 *   path: scripts/check-tool-counts.mjs
 *   shipped in PR #986 (Day-101 root-fix, fix-pattern m974527p6jbbb5kzj3jt2z636n89fddv).
 *
 * Why a mirror lives here: CI on vantage-peers-site needs to assert that the
 * tools-catalogue.mdx (EN + FR) Summary integers + grand **Total** stay
 * consistent with the per-domain table row counts in this repo. Both files
 * (vantage-memory and vantage-peers-site copies) MUST stay byte-equivalent
 * apart from this header comment block. Any change made here must be ported
 * upstream and shipped via a PR against vantage-peers — and vice-versa.
 *
 * Usage:
 *   node scripts/check-tool-counts.mjs \
 *     --target=content/docs/tools-catalogue.mdx \
 *     --target-fr=content/docs/tools-catalogue.fr.mdx
 *
 *   node scripts/check-tool-counts.mjs --update [...]
 *
 * The script will also try to count canonical surface from
 * `mcp-server/src/tools.ts` if present (not the case in this repo) — falls
 * back silently when absent. No network calls.
 *
 * Stdlib only (Node ≥ 20). Idempotent.
 */

import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = resolve(__dirname, "..");

const args = process.argv.slice(2);
const UPDATE = args.includes("--update");
const targetEn =
	(args.find((a) => a.startsWith("--target=")) || "").slice(9) || null;
const targetFr =
	(args.find((a) => a.startsWith("--target-fr=")) || "").slice(12) || null;

const ERRORS = [];
const FIXED = [];

function fail(msg) {
	ERRORS.push(msg);
}

function info(msg) {
	process.stdout.write(`${msg}\n`);
}

function countCanonicalSurface() {
	const mainFile = join(REPO_ROOT, "mcp-server/src/tools.ts");
	if (!existsSync(mainFile)) return null;
	let total = 0;
	const RE = /^[ \t]*server\.tool\(/gm;
	const main = readFileSync(mainFile, "utf8");
	total += (main.match(RE) || []).length;
	const toolsDir = join(REPO_ROOT, "mcp-server/src/tools");
	if (existsSync(toolsDir)) {
		for (const entry of readdirSync(toolsDir)) {
			if (!entry.endsWith(".ts")) continue;
			if (entry.includes("__tests__")) continue;
			const sub = readFileSync(join(toolsDir, entry), "utf8");
			total += (sub.match(RE) || []).length;
		}
	}
	return total;
}

function parseCatalogue(path) {
	if (!existsSync(path)) {
		fail(`Catalogue not found at ${path}`);
		return null;
	}
	const src = readFileSync(path, "utf8");
	const lines = src.split("\n");

	let summaryStartLine = -1;
	let summaryEndLine = lines.length;
	for (let i = 0; i < lines.length; i++) {
		if (!/^## /.test(lines[i])) continue;
		let j = i + 1;
		while (j < lines.length && !/^## /.test(lines[j])) j++;
		for (let k = i + 1; k < j; k++) {
			if (/^\|\s*\*\*[^|*]+\*\*\s*\|\s*\*\*\d+\*\*\s*\|/.test(lines[k])) {
				summaryStartLine = i;
				summaryEndLine = j;
				break;
			}
		}
		if (summaryStartLine !== -1) break;
	}

	const actual = {};
	let currentDomain = null;
	let skipDomain = false;
	for (let i = 0; i < lines.length; i++) {
		const ln = lines[i];
		const h2 = ln.match(/^## (.+?)\s*$/);
		if (h2) {
			currentDomain = h2[1];
			skipDomain = summaryStartLine !== -1 && i >= summaryStartLine;
			if (!skipDomain && !(currentDomain in actual)) actual[currentDomain] = 0;
			continue;
		}
		if (!currentDomain || skipDomain) continue;
		if (/^\| `[^`]+` \|/.test(ln)) {
			actual[currentDomain]++;
		}
	}

	const declared = {};
	let declaredTotal = null;
	for (let i = summaryStartLine + 1; i < summaryEndLine; i++) {
		const ln = lines[i];
		const totalMatch = ln.match(
			/^\|\s*\*\*[^|*]+\*\*\s*\|\s*\*\*(\d+)\*\*\s*\|/,
		);
		if (totalMatch) {
			declaredTotal = Number.parseInt(totalMatch[1], 10);
			continue;
		}
		const rowMatch = ln.match(/^\|\s*([^|*]+?)\s*\|\s*(\d+)\s*\|/);
		if (rowMatch) {
			declared[rowMatch[1].trim()] = Number.parseInt(rowMatch[2], 10);
		}
	}

	return {
		src,
		lines,
		actual,
		declared,
		declaredTotal,
		summaryRange: [summaryStartLine, summaryEndLine],
	};
}

function checkCatalogue(path, label) {
	const parsed = parseCatalogue(path);
	if (!parsed) return null;
	const drifts = [];
	const allDomains = new Set([
		...Object.keys(parsed.actual),
		...Object.keys(parsed.declared),
	]);
	for (const d of allDomains) {
		const a = parsed.actual[d] ?? 0;
		const dec = parsed.declared[d];
		if (dec === undefined) {
			drifts.push({ domain: d, declared: "missing-from-Summary", actual: a });
			continue;
		}
		if (a !== dec) {
			drifts.push({ domain: d, declared: dec, actual: a });
		}
	}
	const actualTotal = Object.values(parsed.actual).reduce((s, n) => s + n, 0);
	const totalDrift = parsed.declaredTotal !== actualTotal;
	return { path, label, parsed, drifts, actualTotal, totalDrift };
}

function updateCatalogueInPlace(report) {
	let src = report.parsed.src;
	for (const d of report.drifts) {
		if (typeof d.declared !== "number") continue;
		const re = new RegExp(
			`(\\|\\s*${escapeRegex(d.domain)}\\s*\\|\\s*)${d.declared}(\\s*\\|)`,
			"m",
		);
		const before = src;
		src = src.replace(re, `$1${d.actual}$2`);
		if (src !== before)
			FIXED.push(`${report.label}: ${d.domain} ${d.declared}→${d.actual}`);
	}
	if (report.totalDrift) {
		const re = /(\|\s*\*\*Total\*\*\s*\|\s*\*\*)\d+(\*\*\s*\|)/m;
		const before = src;
		src = src.replace(re, `$1${report.actualTotal}$2`);
		if (src !== before) {
			FIXED.push(
				`${report.label}: **Total** ${report.parsed.declaredTotal}→${report.actualTotal}`,
			);
		}
	}
	writeFileSync(report.path, src);
}

function escapeRegex(s) {
	return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function reportCatalogue(report) {
	info(`\n${report.label} (${report.path})`);
	info(`  actual rows per domain: total=${report.actualTotal}`);
	if (report.drifts.length === 0 && !report.totalDrift) {
		info(`  Summary integers + Total — OK`);
		return;
	}
	for (const d of report.drifts) {
		info(`  ${d.domain}: Summary=${d.declared}, table-rows=${d.actual}`);
	}
	if (report.totalDrift) {
		info(
			`  **Total**: declared=${report.parsed.declaredTotal}, sum=${report.actualTotal}`,
		);
	}
}

function main() {
	const canonical = countCanonicalSurface();
	if (canonical !== null) {
		info(`tools.ts canonical surface = ${canonical}`);
	} else {
		info(`tools.ts not in this repo — skipping canonical surface count.`);
	}

	if (targetEn) {
		const enReport = checkCatalogue(targetEn, "tools-catalogue.mdx");
		if (enReport) {
			reportCatalogue(enReport);
			if (enReport.drifts.length > 0 || enReport.totalDrift) {
				if (UPDATE) updateCatalogueInPlace(enReport);
				else fail(`${enReport.label} drift`);
			}
		}
	}

	if (targetFr) {
		const frReport = checkCatalogue(targetFr, "tools-catalogue.fr.mdx");
		if (frReport) {
			reportCatalogue(frReport);
			if (frReport.drifts.length > 0 || frReport.totalDrift) {
				if (UPDATE) updateCatalogueInPlace(frReport);
				else fail(`${frReport.label} drift`);
			}
		}
	}

	if (FIXED.length > 0) {
		info(`\nApplied ${FIXED.length} fix(es) (--update):`);
		for (const f of FIXED) info(`  ${f}`);
	}
	if (ERRORS.length > 0) {
		info(`\nFAIL — ${ERRORS.length} drift class(es) detected:`);
		for (const e of ERRORS) info(`  ${e}`);
		info(`\nRe-run with --update to auto-fix integers.`);
		process.exit(1);
	}
	info(`\nOK — all tool counts consistent.`);
}

main();
