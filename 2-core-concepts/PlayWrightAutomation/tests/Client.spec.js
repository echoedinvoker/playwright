// import { expect, test } from "@playwright/test";
import { expect } from "@playwright/test";
import { test } from "../utils/test-base";
import { POManager } from "../pageobjects/POManager";
const dataSet = JSON.parse(JSON.stringify(require("../utils/placeordersTestData.json")))


// for (const data of dataSet) {
  // test("First Playwright test", async ({ page }) => {
  // test(`Client App login for ${data.productName}`, async ({ page }) => {
  test(`Client App login`, async ({ page, data }) => {

    const poManager = new POManager(page)
    const loginPage = poManager.getLoginPage()
    const dashboardPage = poManager.getDashboardPage()

    // Login page
    await loginPage.goTo()
    await loginPage.validLogin(data.username, data.password)

    // const dashboardPage = new DashboardPage(page)
    await dashboardPage.addProductToCart(data.productName)
    await dashboardPage.goToOrders()

    // Cart page - check if that product in the cart
    const bool = await page.locator(`h3:has-text('${data.productName}')`).isVisible()
    expect(bool).toBeTruthy();
  });
// }



