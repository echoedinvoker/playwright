import { test } from "@playwright/test";

test("Popup test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  // #confirmbtn
  // await page.locator("#confirmbtn").click();
  page.on("dialog", (d) => d.accept());
  await page.locator("#confirmbtn").click();
  await page.pause();
});
