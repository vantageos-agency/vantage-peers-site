import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "./e2e",
	timeout: 30_000,
	retries: 1,
	reporter: [["list"], ["./e2e/quality-gate-reporter.ts"]],
	use: {
		baseURL: "https://www.vantagepeers.com",
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
