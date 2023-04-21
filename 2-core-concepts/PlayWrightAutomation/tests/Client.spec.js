import { request, test } from "@playwright/test";
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
const fakePlayloadOrders = { data: [], message: "No Orders" }

const url = 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6441f6ef568c3e9fb15824fb'

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

  await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/643b6ceb568c3e9fb152f96d',
    async route => {
      const response = await page.request.fetch(route.request())
      route.fulfill({
        response,
      })
    }
  )

  await page.locator("[routerlink*='myorders']").first().click();
  await page.waitForResponse('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/643b6ceb568c3e9fb152f96d')
  
  const orderId = await page.locator("th[scope='row']").first().textContent()


  await page.route(`https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=${orderId}`,
    route => {
      route.continue({
        url
      })
    }
  )

  await page.pause()
  await page.locator("button:has-text('View')").first().click()
});
