import { expect, test } from "@playwright/test";

test("Popup test", async ({ page }) => {
  // #displayed-text
  // #hide-textbox
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  // await expect(page.locator("#displayed-text")).toBeVisible();
  // await page.locator("#hide-textbox").click();
  // await expect(page.locator("#displayed-text")).toBeHidden();

  await page.goto("https://google.com");
  await page.goBack();
  await page.goForward();
});
