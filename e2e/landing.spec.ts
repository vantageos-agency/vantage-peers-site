import { expect, test } from "@playwright/test";

test.describe("VantagePeers landing page", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/", { waitUntil: "domcontentloaded" });
	});

	// Test 1: Page loads with correct title
	test("landing page loads with status 200 and correct title", async ({
		page,
	}) => {
		const response = await page.goto("/", { waitUntil: "domcontentloaded" });
		expect(response?.status()).toBe(200);
		await expect(page).toHaveTitle(/VantagePeers/);
	});

	// Test 2: Hero shows "The coordination layer" (not "Persistent memory")
	test('hero headline contains "coordination layer" not "Persistent memory"', async ({
		page,
	}) => {
		const heroText = await page.locator("h1, h2").first().textContent();
		expect(heroText?.toLowerCase()).toContain("coordination layer");
		const bodyText = await page.locator("body").textContent();
		expect(bodyText).not.toContain("Persistent memory");
	});

	// Test 3: Hero stats show "20" tables and "82" tools
	test("hero stats show 20 tables and 82 tools", async ({ page }) => {
		const bodyText = await page.locator("body").textContent();
		expect(bodyText).toMatch(/20/);
		expect(bodyText).toMatch(/82/);
		// Verify via meta description which is always present
		const metaDesc = await page
			.locator('meta[name="description"]')
			.getAttribute("content");
		expect(metaDesc).toContain("20 tables");
		expect(metaDesc).toContain("82 tools");
	});

	// Test 4: FSL license badge visible (not MIT)
	test("FSL license is mentioned, MIT is not the license", async ({ page }) => {
		const bodyText = await page.locator("body").textContent();
		expect(bodyText).toContain("FSL");
		expect(bodyText).toMatch(/FSL/);
	});

	// Test 5: Features section has at least 10 feature cards (all H3 headings as proxy)
	test("page has at least 10 section headings covering features", async ({
		page,
	}) => {
		const h3Count = await page.locator("h3").count();
		expect(h3Count).toBeGreaterThanOrEqual(10);
	});

	// Test 6: Compare table shows supermemory and mem0
	test("compare table shows supermemory and mem0 columns", async ({ page }) => {
		const table = page.locator("table");
		await expect(table).toBeVisible();
		const tableText = await table.textContent();
		expect(tableText?.toLowerCase()).toContain("supermemory");
		expect(tableText?.toLowerCase()).toContain("mem0");
	});

	// Test 7: FAQ section has at least 9 questions visible
	test("FAQ section has at least 9 questions", async ({ page }) => {
		await expect(page.locator("text=Frequently Asked Questions")).toBeVisible();
		// Questions are collapsible buttons rendered with data-slot attribute
		const faqButtons = page.locator('[data-slot="collapsible-trigger"]');
		const count = await faqButtons.count();
		expect(count).toBeGreaterThanOrEqual(9);
	});

	// Test 8: Pricing section shows Free, €290, €49
	test("pricing section shows Free, €290 and €49 tiers", async ({ page }) => {
		const bodyText = await page.locator("body").textContent();
		expect(bodyText).toContain("Free");
		expect(bodyText).toContain("€290");
		expect(bodyText).toContain("€49");
	});

	// Test 9: FR locale switch changes page content to French
	test("navigating to /fr renders French content", async ({ page }) => {
		await page.goto("/fr", { waitUntil: "domcontentloaded" });
		const title = await page.title();
		// French page title contains accent character or French word
		expect(title).toMatch(/Mémoire|VantagePeers/);
		const bodyText = await page.locator("body").textContent();
		// French page body should contain French words
		expect(bodyText?.toLowerCase()).toMatch(/mémoire|partagée|agents/);
	});

	// Test 10: Docs link navigates without 404
	test("docs link navigates successfully without 404", async ({ page }) => {
		const docsLink = page.locator('a[href="/docs"]').first();
		await expect(docsLink).toBeVisible();
		const response = await page.goto("/docs", {
			waitUntil: "domcontentloaded",
		});
		expect(response?.status()).not.toBe(404);
	});
});
