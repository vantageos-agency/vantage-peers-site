import { readFileSync } from "node:fs";
import { join } from "node:path";
import { expect, test } from "@playwright/test";

// Content test for the Cloud "connect" pages (task k174ga37c90ajm53nq4qpaxc6h8haq8k).
// Reads the MDX sources directly; no browser, no network.
const pages = [
	{ file: "content/docs/cloud/connect.mdx", lang: "en" },
	{ file: "content/docs/cloud/connect.fr.mdx", lang: "fr" },
] as const;

for (const { file, lang } of pages) {
	test.describe(`${file}`, () => {
		const body = readFileSync(join(process.cwd(), file), "utf8");

		test("has a Grok section", () => {
			expect(body).toMatch(/^##+ .*Grok/m);
		});

		test("explains the agent choice at consent", () => {
			const re =
				lang === "en"
					? /consent[\s\S]{0,400}agent|agent[\s\S]{0,400}consent/i
					: /consentement[\s\S]{0,400}agent|agent[\s\S]{0,400}consentement/i;
			expect(body).toMatch(re);
			expect(body).toContain("Connect as myself");
		});

		test("carries the MCP URL", () => {
			expect(body).toContain("https://mcp.vantagepeers.com/mcp");
		});

		test("carries the test prompt (whoami)", () => {
			expect(body).toContain("whoami");
		});

		test("does not claim ChatGPT writing is paid-plans only", () => {
			expect(body).not.toMatch(/all paid plans|tous les forfaits payants/i);
		});
	});
}
