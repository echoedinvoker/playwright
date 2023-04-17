import { test } from "@playwright/test";

test("First Playwright test", async ({ page }) => {
  const cardBody = page.locator(".card-body");
  const productName = "adidas original";

  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("echoedinvoker@gmail.com");
  await page.locator("#userPassword").type("1234@Matt");
  await page.locator("[value='Login']").click();

  await page.waitForLoadState("networkidle");
  // console.log(await page.locator(".card-body b").allTextContents());

  const count = await cardBody.count();
  console.log(count);
  for (let i = 0; i < count; i++) {
    if ((await cardBody.nth(i).locator("b").textContent()) === productName) {
      await cardBody.nth(i).locator("text=  Add To Cart").click();
      break;
    }
  }

  await page.pause();
});
