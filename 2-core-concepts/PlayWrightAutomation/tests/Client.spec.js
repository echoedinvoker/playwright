import { expect, test } from "@playwright/test";
import { POManager } from "../pageobjects/POManager";
const dataSet = JSON.parse(JSON.stringify(require("../utils/placeordersTestData.json")))

test("First Playwright test", async ({ page }) => {
  // const email = "echoedinvoker@gmail.com"
  // const password = "1234@Matt"
  // const productName = "adidas original"

  const poManager = new POManager(page)
  const loginPage = poManager.getLoginPage()
  const dashboardPage = poManager.getDashboardPage()

  // Login page
  await loginPage.goTo()
  await loginPage.validLogin(dataSet.username, dataSet.password)

  // const dashboardPage = new DashboardPage(page)
  await dashboardPage.addProductToCart(dataSet.productName)
  await dashboardPage.goToOrders()

  // Cart page - check if that product in the cart
  const bool = await page.locator(`h3:has-text('${dataSet.productName}')`).isVisible()
  expect(bool).toBeTruthy();
});

