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

test.only("UI test", async ({ page }) => {
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
