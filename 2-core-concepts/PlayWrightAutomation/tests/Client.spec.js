import { expect, test } from "@playwright/test";

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto("https://rahulshettyacademy.com/client")
  await page.locator("#userEmail").fill("echoedinvoker@gmail.com")
  await page.locator("#userPassword").type("1234@Matt")
  await page.locator("[value='Login']").click()
  await page.waitForLoadState("networkidle")
  await context.storageState({path: 'state.json'})
});

test("First Playwright test", async ({ page }) => {

  // await page.goto("https://rahulshettyacademy.com/client");
  // await page.locator("[routerlink*='myorders']").first().click();
  // const orders = page.locator("tbody tr");
  // await orders.first().waitFor();

  // const countOrders = await orders.count();

  // for (let i = 0; i < countOrders; i++) {
  //   const order = orders.nth(i);
  //   // if (orderId.includes(await order.locator("th").textContent())) {
  //   if (response.orderId.includes(await order.locator("th").textContent())) {
  //     order.locator("button.btn-primary").click();
  //     break;
  //   }
  // }

  // expect(
  //   // orderId.includes(
  //   response.orderId.includes(
  //     await page.locator(".email-wrapper .col-text.-main").textContent()
  //   )
  // ).toBeTruthy();
});
