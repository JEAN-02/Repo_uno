import { test, expect } from '@playwright/test';

test('Hola mundo', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/DEMOQA/);
  await expect(page).toHaveURL(/.*text-box/);
  // await page.locator("#userName").fill("Jesus")
  await page.fill("#userName","Jesus")
  await page.fill("#userEmail","Jesus@example.com")
});

