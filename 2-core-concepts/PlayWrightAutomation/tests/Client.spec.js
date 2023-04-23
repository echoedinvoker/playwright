import { expect, test } from "@playwright/test";
import { POManager } from "../pageobjects/POManager";
// import { LoginPage } from "../pageobjects/LoginPage";
// import { DashboardPage } from "../pageobjects/DashboardPage";

test("First Playwright test", async ({ page }) => {
  const email = "echoedinvoker@gmail.com"
  const password = "1234@Matt"
  const productName = "adidas original"

  const poManager = new POManager(page)
  const loginPage = poManager.getLoginPage()
  const dashboardPage = poManager.getDashboardPage()

  // Login page
  // const loginPage = new LoginPage(page)
  await loginPage.goTo()
  await loginPage.validLogin(email, password)

  // const dashboardPage = new DashboardPage(page)
  await dashboardPage.addProductToCart(productName)
  await dashboardPage.goToOrders()

  // Cart page - check if that product in the cart
  const bool = await page.locator(`h3:has-text('${productName}')`).isVisible()
  expect(bool).toBeTruthy();
});

