import { expect, request, test } from "@playwright/test";
import { APIUtils } from "./utils/APiUtils";

let response;

const loginPayload = {
          userEmail: "echoedinvoker@gmail.com",
          userPassword: "1234@Matt",
        }
const orders = [
            {
              country: "Taiwan, Province of China",
              productOrderedId: "6262e990e26b7e1a10e89bfa",
            },
          ]

test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const apiUtils = new APIUtils(apiContext, loginPayload)

  response = await apiUtils.createOrder(orders)
});

test("First Playwright test", async ({ page }) => {
  page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, response.token);

  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("[routerlink*='myorders']").first().click();
  const orders = page.locator("tbody tr");
  await orders.first().waitFor();

  const countOrders = await orders.count();

  for (let i = 0; i < countOrders; i++) {
    const order = orders.nth(i);
    if (response.orderId.includes(await order.locator("th").textContent())) {
      order.locator("button.btn-primary").click();
      break;
    }
  }

  expect(
    response.orderId.includes(
      await page.locator(".email-wrapper .col-text.-main").textContent()
    )
  ).toBeTruthy();
});
