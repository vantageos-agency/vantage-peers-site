import { expect, test } from "@playwright/test";

// Regression tests for issues #110 and #111.
// The docs landing Quick Links table must resolve to valid pages.
// /docs/quickstart and /docs/architecture are NOT valid routes;
// the correct targets are /docs/getting-started/quickstart and
// /docs/core-concepts/architecture respectively.
test.describe("docs Quick Links — no 404 regressions (#110, #111)", () => {
	// Quickstart: must resolve to 200 (issue #110)
	test("GET /docs/getting-started/quickstart returns 200", async ({
		request,
	}) => {
		const response = await request.get("/docs/getting-started/quickstart");
		expect(response.status()).toBe(200);
	});

	// Architecture: must resolve to 200 (issue #111)
	test("GET /docs/core-concepts/architecture returns 200", async ({
		request,
	}) => {
		const response = await request.get("/docs/core-concepts/architecture");
		expect(response.status()).toBe(200);
	});

	// Verify docs landing links go to the correct sub-paths (not /docs/quickstart)
	test("docs landing Quick Links point to correct sub-paths", async ({
		page,
	}) => {
		await page.goto("/docs", { waitUntil: "domcontentloaded" });
		const quickstartLink = page.locator(
			'a[href*="getting-started/quickstart"]',
		);
		await expect(quickstartLink).toBeVisible();
		const archLink = page.locator('a[href*="core-concepts/architecture"]');
		await expect(archLink).toBeVisible();
	});

	// FR locale: same links must be present under /docs/fr
	test("docs FR landing Quick Links point to correct sub-paths", async ({
		page,
	}) => {
		await page.goto("/docs/fr", { waitUntil: "domcontentloaded" });
		const quickstartLink = page.locator(
			'a[href*="getting-started/quickstart"]',
		);
		await expect(quickstartLink).toBeVisible();
		const archLink = page.locator('a[href*="core-concepts/architecture"]');
		await expect(archLink).toBeVisible();
	});
});
