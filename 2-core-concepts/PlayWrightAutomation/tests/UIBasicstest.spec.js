import { expect, test } from "@playwright/test";

test("First Playwright test", async ({ page }) => {
  const username = page.locator("#username");
  const password = page.locator("#password");
  const signInBtn = page.locator("#signInBtn");
  const cardTitles = page.locator(".card-title a");

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await username.type("matt");
  await password.type("123");
  await signInBtn.click();

  const errorMsg = page.locator("[style*='none']");
  console.log(await errorMsg.textContent());
  expect(errorMsg).toContainText("Incorrect");

  await username.fill("rahulshettyacademy");
  await password.fill("learning");
  // await signInBtn.click();

  await Promise.all([page.waitForNavigation(), signInBtn.click()]);

  console.log(await cardTitles.allTextContents());
});

test("UI test", async ({ page }) => {
  const radioUser = page.locator(".radiotextsty").last();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.locator("select.form-control").selectOption("consult");

  await radioUser.click();
  await page.locator("#okayBtn").click();

  console.log(await radioUser.isChecked());
  await expect(radioUser).toBeChecked();

  expect(await page.locator("#terms").isChecked()).toBeFalsy();

  await expect(page.locator("[href*='documents-request']")).toHaveAttribute(
    "class",
    "blinkingText"
  );

  // await page.pause();
});

test.only("Child window handling", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("[href*='documents-request']").click(),
  ]);

  const text = await newPage.locator(".red").textContent();
  const arrayTest = text.split("@");
  const username = arrayTest[1].split(" ")[0];
  console.log(username);

  await page.locator("#username").type(username);

  await page.pause();
});
