import { expect, test } from "@playwright/test";

test("First Playwright test", async ({ page }) => {
  const cardBody = page.locator(".card-body");
  const productName = "adidas original";

  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("echoedinvoker@gmail.com");
  await page.locator("#userPassword").type("1234@Matt");
  await page.locator("[value='Login']").click();

  await page.waitForLoadState("networkidle");

  const count = await cardBody.count();
  for (let i = 0; i < count; i++) {
    if (
      (await cardBody.nth(i).locator("b").textContent()) === productName ||
      (await cardBody.nth(i).locator("b").textContent()) === "zara coat 3"
    ) {
      await cardBody.nth(i).locator("text=  Add To Cart").click();
      //break;
    }
  }

  await page.locator("[routerlink*='cart']").click();

  await page.locator("li h3").first().waitFor();
  const bool = await page.locator("h3:has-text('adidas original')").isVisible();
  expect(bool).toBeTruthy();
});
