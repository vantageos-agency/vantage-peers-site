import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "./e2e",
	timeout: 30_000,
	retries: 1,
	reporter: [["list"], ["./e2e/quality-gate-reporter.ts"]],
	use: {
		// E2E_BASE_URL points the suite at a local or preview server; prod by default.
		baseURL: process.env.E2E_BASE_URL ?? "https://www.vantagepeers.com",
		headless: true,
		locale: "en-US",
	},
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
	],
});
