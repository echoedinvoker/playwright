import { expect, test } from "@playwright/test";
import { LoginPage } from "../pageobjects/LoginPage";

test("First Playwright test", async ({ page }) => {
  const email = "echoedinvoker@gmail.com"
  const password = "1234@Matt"
  const productName = "adidas original"

  const products = page.locator(".card-body")

  // Login page
  // await page.goto("https://rahulshettyacademy.com/client");
  // await page.locator("#userEmail").fill(email)
  // await page.locator("#userPassword").fill(password)
  // await page.locator("[value='Login']").click()
  const loginPage = new LoginPage(page)
  loginPage.goTo()
  loginPage.validLogin(email, password)

  // await page.waitForLoadState("networkidle")

  // Dashboard page - add a specific product to the cart
  const count = await products.count()
  for (let i=0; i<count; i++) {
    if (await products.nth(i).locator("b").textContent() === productName) {
      await products.nth(i).locator("text= Add To Cart").click()
      break
    }
  }

  await page.locator("[routerlink*='cart']").click();
  await page.locator("div li").first().waitFor()

  // Cart page - check if that product in the cart
  const bool = await page.locator(`h3:has-text('${productName}')`).isVisible()
  expect(bool).toBeTruthy();
});

