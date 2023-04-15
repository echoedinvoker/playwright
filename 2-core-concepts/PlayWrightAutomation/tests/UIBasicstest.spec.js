import { expect, test } from "@playwright/test";

test("First Playwright test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.locator("#username").type("matt");
  await page.locator("#password").type("123");
  await page.locator("#signInBtn").click();

  // const errorMsg = await page.locator("[style*='none']").textContent();
  const errorMsg = page.locator("[style*='none']");
  console.log(await errorMsg.textContent());

  expect(errorMsg).toContainText("Incorrectxxxx");
});
