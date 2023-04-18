import { expect, request, test } from "@playwright/test";

let token;

test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const loginResponse = await apiContext.post(
    "https://rahulshettyacademy.com/api/ecom/auth/login",
    {
      data: {
        userEmail: "echoedinvoker@gmail.com",
        userPassword: "1234@Matt",
      },
    }
  );
  expect(loginResponse.ok()).toBeTruthy();
  const loginResponseObject = await loginResponse.json();
  token = loginResponseObject.token;
});

test("First Playwright test", async ({ page }) => {
  page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, token);

  const cardBody = page.locator(".card-body");
  const productName = "adidas original";
  const account = "echoedinvoker@gmail.com";

  await page.goto("https://rahulshettyacademy.com/client");
  // await page.locator("#userEmail").fill(account);
  // await page.locator("#userPassword").type("1234@Matt");
  // await page.locator("[value='Login']").click();
  //
  // await page.waitForLoadState("networkidle");

  const count = await cardBody.count();
  for (let i = 0; i < count; i++) {
    if ((await cardBody.nth(i).locator("b").textContent()) === productName) {
      await cardBody.nth(i).locator("text=  Add To Cart").click();
      break;
    }
  }

  await page.locator("[routerlink*='cart']").click();

  await page.locator("li h3").first().waitFor();
  const bool = await page.locator("h3:has-text('adidas original')").isVisible();
  expect(bool).toBeTruthy();

  await page.locator("[type='button']").last().click();
  await page.locator("[placeholder*='Country']").type("tai", { delay: 100 });

  const dropdown = page.locator("section.ta-results");
  await dropdown.waitFor();

  const options = dropdown.locator("button.ta-item");
  const optionsCount = await options.count();
  for (let i = 0; i < optionsCount; i++) {
    const text = await options.nth(i).textContent();
    if (text === " Taiwan, Province of China") {
      await options.nth(i).click();
      break;
    }
  }

  await expect(page.locator(".user__name>input")).toHaveValue(account);

  await page.locator(".user__name a").click();
  await expect(page.locator("h1.hero-primary")).toHaveText(
    " Thankyou for the order. "
  );
  const orderId = await page
    .locator(".em-spacer-1 .ng-star-inserted")
    .textContent();
  // const formatOrderId = orderId.replaceAll("|", "").trim();

  await page.locator("[routerlink*='myorders']").first().click();
  // await page.locator("tr.ng-star-inserted").first().waitFor();
  const orders = page.locator("tbody tr");
  await orders.first().waitFor();

  // const orders = page.locator("tr.ng-star-inserted");
  const countOrders = await orders.count();

  for (let i = 0; i < countOrders; i++) {
    const order = orders.nth(i);
    // if ((await order.locator("th").textContent()) === formatOrderId) {
    if (orderId.includes(await order.locator("th").textContent())) {
      order.locator("button.btn-primary").click();
      break;
    }
  }

  // await expect(page.locator(".email-wrapper .col-text.-main")).toHaveText(
  //   formatOrderId
  // );
  expect(
    orderId.includes(
      await page.locator(".email-wrapper .col-text.-main").textContent()
    )
  ).toBeTruthy();
});
