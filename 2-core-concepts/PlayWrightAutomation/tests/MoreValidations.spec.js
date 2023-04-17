import { test } from "@playwright/test";

test("Popup test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  page.on("dialog", (d) => d.accept());
  await page.locator("#confirmbtn").click();

  // #courses-iframe
  // [href*='lifetime-access']
  // .text h2 span
  await page.locator("#courses-iframe").hover();
  const framePage = page.frameLocator("#courses-iframe");
  await framePage.locator("li a[href*='lifetime-access']:visible").click();
  const subscribers = await framePage.locator(".text h2 span").textContent();
  console.log(subscribers);

  //await page.pause();
});
