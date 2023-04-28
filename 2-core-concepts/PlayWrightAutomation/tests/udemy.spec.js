import { expect, request, test } from "@playwright/test";

test.only("First Playwright test", async ({ page }) => {
  const google = page.locator("button:has-text('Continue with Google')")
  const inputMail = page.locator("#identifierId")
  const goAhead = page.locator("button:has-text('繼續')")

  await page.goto("https://www.udemy.com/join/login-popup/?locale=en_US&response_type=html&next=https%3A%2F%2Fwww.udemy.com%2F")
  await page.pause()
});
