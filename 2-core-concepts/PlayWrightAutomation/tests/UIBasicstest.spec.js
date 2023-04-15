import { expect, test } from "@playwright/test";

test("First Playwright test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
});

test("Second Playwright test", async ({ page }) => {
  await page.goto("https://google.com/");
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
});
