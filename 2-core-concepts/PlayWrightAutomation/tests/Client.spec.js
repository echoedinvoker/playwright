import { expect, test } from "@playwright/test";
import { LoginPage } from "../pageobjects/LoginPage";
import { DashboardPage } from "../pageobjects/DashboardPage";

test("First Playwright test", async ({ page }) => {
  const email = "echoedinvoker@gmail.com"
  const password = "1234@Matt"
  const productName = "adidas original"

  const products = page.locator(".card-body")

  // Login page
  const loginPage = new LoginPage(page)
  await loginPage.goTo()
  await loginPage.validLogin(email, password)

  // Dashboard page - add a specific product to the cart
  // const count = await products.count()
  // for (let i=0; i<count; i++) {
  //   if (await products.nth(i).locator("b").textContent() === productName) {
  //     await products.nth(i).locator("text= Add To Cart").click()
  //     break
  //   }
  // }

  // await page.locator("[routerlink*='cart']").click();
  // await page.locator("div li").first().waitFor()
  const dashboardPage = new DashboardPage(page)
  await dashboardPage.addProductToCart(productName)
  await dashboardPage.goToOrders()

  // Cart page - check if that product in the cart
  const bool = await page.locator(`h3:has-text('${productName}')`).isVisible()
  expect(bool).toBeTruthy();
});

