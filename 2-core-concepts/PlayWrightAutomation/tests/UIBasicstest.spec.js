import { test } from "@playwright/test";

test("First Playwright test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.locator("#username").type("matt");
  await page.locator("#password").type("123");
  await page.locator("#signInBtn").click();
});
