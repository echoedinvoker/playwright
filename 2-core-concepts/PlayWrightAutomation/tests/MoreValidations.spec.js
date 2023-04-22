import { expect, test } from "@playwright/test";

test("Popup test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await expect(page.locator("#displayed-text")).toBeVisible()
  await page.locator("#hide-textbox").click()
  await expect(page.locator("#displayed-text")).toBeHidden()
  
  await page.locator("fieldset:has(legend:has-text('Element Displayed Example'))").screenshot({ path: 'screenshot.png' })
});

