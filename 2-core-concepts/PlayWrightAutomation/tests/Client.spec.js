import { expect, test } from "@playwright/test";

test("First Playwright test", async ({ page }) => {
  const cardBody = page.locator(".card-body");
  const productName = "adidas original";
  const account = "echoedinvoker@gmail.com";

  await page.goto("https://rahulshettyacademy.com/client");
  // await page.locator("#userEmail").fill("echoedinvoker@gmail.com");
  await page.locator("#userEmail").fill(account);
  await page.locator("#userPassword").type("1234@Matt");
  await page.locator("[value='Login']").click();

  await page.waitForLoadState("networkidle");

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

  // .user__name>input
  // .user__name a
  // h1.hero-primary
  // .em-spacer-1 .ng-star-inserted
  // [routerlink*='myorders']
  // tr.ng-star-inserted
  // tr.ng-star-inserted th
  // tr.ng-star-inserted button.btn-primary
  // .email-wrapper .col-text.-main

  // await expect(page.locator(".user__name>input")).toHaveText(account);
  await expect(page.locator(".user__name>input")).toHaveValue(account);

  await page.locator(".user__name a").click();
  await expect(page.locator("h1.hero-primary")).toHaveText(
    " Thankyou for the order. "
  );
  const orderId = await page
    .locator(".em-spacer-1 .ng-star-inserted")
    .textContent();
  // console.log(orderId.replaceAll("|", "").trim());
  // console.log("#######");
  const formatOrderId = orderId.replaceAll("|", "").trim();

  await page.locator("[routerlink*='myorders']").first().click();
  // await page.waitForLoadState("networkidle");
  await page.locator("tr.ng-star-inserted").first().waitFor();

  const orders = page.locator("tr.ng-star-inserted");
  const countOrders = await orders.count();

  // console.log(countOrders);
  // let result = false;
  for (let i = 0; i < countOrders; i++) {
    // console.log(await orders.nth(i).locator("th").textContent());
    const order = orders.nth(i);
    // if ((await orders.nth(i).locator("th").textContent()) === formatOrderId) {
    if ((await order.locator("th").textContent()) === formatOrderId) {
      // result = true;
      order.locator("button.btn-primary").click();
      break;
    }
  }
  // expect(result).toBeTruthy();

  // const result = await page
  //   .locator(".email-wrapper .col-text.-main")
  //   .textContent();
  // console.log(result);
  await expect(page.locator(".email-wrapper .col-text.-main")).toHaveText(
    formatOrderId
  );

  // await page.pause();
});
