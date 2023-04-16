import { test } from "@playwright/test";

test("First Playwright test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("echoedinvoker@gmail.com");
  await page.locator("#userPassword").type("1234@Matt");
  await page.locator("[value='Login']").click();

  await page.waitForLoadState("networkidle");
  console.log(await page.locator(".card-body b").allTextContents());
});
