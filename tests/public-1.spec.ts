import { test, expect } from "@playwright/test";

import { prefetch, setup } from "./utils";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

test.beforeAll("Setup", async () => {
  await prefetch();
});

test.beforeEach(async ({ page }) => {
  await setup(page);
});

test("1.1 Test Sign Up (0%)", async ({ page }) => {
  await page.goto(`${baseURL}/`);
  await page.waitForURL(`/auth`);
  await page.getByText("Sign Up").click();
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill("123@gmail.com");
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill("Test");
  await page
    .locator("div")
    .filter({ hasText: /^Password$/ })
    .getByRole("textbox")
    .click();
  await page
    .locator("div")
    .filter({ hasText: /^Password$/ })
    .getByRole("textbox")
    .fill("12345678");
  await page
    .locator("div")
    .filter({ hasText: /^Confirm Password$/ })
    .getByRole("textbox")
    .click();
  await page
    .locator("div")
    .filter({ hasText: /^Confirm Password$/ })
    .getByRole("textbox")
    .fill("12345678");
  await page.getByRole("button", { name: "Sign Up" }).click();
  await expect(
    page.getByRole("heading", { name: "Your Projects" }),
  ).toBeVisible();
});
