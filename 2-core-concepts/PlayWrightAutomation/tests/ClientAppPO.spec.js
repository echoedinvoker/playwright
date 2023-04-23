import { test, expect } from "@playwright/test";
import { POManager } from "../pageobjects/POManager";
const dataSet = JSON.parse(JSON.stringify(require("../utils/placeordersTestData.json")))


test("Client App login", async ({ page }) => {
  const poManager = new POManager(page);
  //js file- Login js, DashboardPage
  // const username = "anshika@gmail.com";
  // const password = "Iamking@000";
  // const productName = "Zara Coat 4";
  const loginPage = poManager.getLoginPage();
  await loginPage.goTo();
  // await loginPage.validLogin(username, password);
  await loginPage.validLogin(dataSet.username, dataSet.password);
  const dashboardPage = poManager.getDashboardPage();
  // await dashboardPage.searchProductAddCart(productName);
  await dashboardPage.searchProductAddCart(dataSet.productName);
  await dashboardPage.navigateToCart();

  const cartPage = poManager.getCartPage();
  // await cartPage.VerifyProductIsDisplayed(productName);
  await cartPage.VerifyProductIsDisplayed(dataSet.productName);
  await cartPage.Checkout();

  const ordersReviewPage = poManager.getOrdersReviewPage();
  await ordersReviewPage.searchCountryAndSelect("ind", "India");
  const orderId = await ordersReviewPage.SubmitAndGetOrderId();
  console.log(orderId);
  await dashboardPage.navigateToOrders();
  const ordersHistoryPage = poManager.getOrdersHistoryPage();
  await ordersHistoryPage.searchOrderAndSelect(orderId);
  expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

  //Zara Coat 4
});
