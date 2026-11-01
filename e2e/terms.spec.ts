import { expect, test } from "@playwright/test";

// Task k177ee18e9eqfccy5rkbpgwk9h8g3nbz — the Google OAuth consent screen of the
// VantagePeers Cloud sign-in needs a Terms of Service URL. Before this change
// /terms returned 404 while /privacy returned 200.
test.describe("Terms of Service page (EN + FR) and footer link", () => {
	test("GET /terms renders the English Terms of Service", async ({ page }) => {
		const response = await page.goto("/terms", {
			waitUntil: "domcontentloaded",
		});
		expect(response?.status()).toBe(200);
		await expect(page).toHaveTitle(/Terms of Service/);
		await expect(
			page.getByRole("heading", { level: 1, name: "Terms of Service" }),
		).toBeVisible();
		const bodyText = await page.locator("body").textContent();
		expect(bodyText).toContain("VantagePeers Cloud");
		expect(bodyText).toContain("VantagePeers Self-host");
	});

	test("GET /fr/terms renders the French Terms of Service", async ({
		page,
	}) => {
		const response = await page.goto("/fr/terms", {
			waitUntil: "domcontentloaded",
		});
		expect(response?.status()).toBe(200);
		await expect(page).toHaveTitle(/Conditions d’utilisation/);
		await expect(
			page.getByRole("heading", {
				level: 1,
				name: "Conditions d’utilisation",
			}),
		).toBeVisible();
		const bodyText = await page.locator("body").textContent();
		expect(bodyText).toContain("VantagePeers Cloud");
		expect(bodyText).toContain("VantagePeers Self-host");
	});

	test("landing footer links to /terms next to Privacy Policy", async ({
		page,
	}) => {
		await page.goto("/", { waitUntil: "domcontentloaded" });
		const footer = page.locator("footer");
		await expect(footer.locator('a[href="/privacy"]')).toBeVisible();
		const termsLink = footer.locator('a[href="/terms"]');
		await expect(termsLink).toBeVisible();
		await expect(termsLink).toHaveText("Terms");
	});

	test("French landing footer links to /fr/terms", async ({ page }) => {
		await page.goto("/fr", { waitUntil: "domcontentloaded" });
		const termsLink = page.locator('footer a[href="/fr/terms"]');
		await expect(termsLink).toBeVisible();
		await expect(termsLink).toHaveText("Conditions");
	});
});
