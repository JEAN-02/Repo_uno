import { test, expect } from '@playwright/test';

const sleep = (ms: number | 5000) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByText('Full NameEmailCurrent').click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('J');
  await page.getByRole('textbox', { name: 'Full Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Jesus');
  await page.getByRole('textbox', { name: 'Full Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'name@example.com' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('J');
  await page.getByRole('textbox', { name: 'name@example.com' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('Jesus@example.com');
  await page.getByRole('textbox', { name: 'name@example.com' }).press('Tab');
  await page.getByRole('textbox', { name: 'Current Address' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('D');
  await page.getByRole('textbox', { name: 'Current Address' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Demo de direccion 1');
  await page.getByRole('textbox', { name: 'Current Address' }).press('Tab');
  await page.locator('#permanentAddress').press('CapsLock');
  await page.locator('#permanentAddress').fill('D');
  await page.locator('#permanentAddress').press('CapsLock');
  await page.locator('#permanentAddress').fill('Demo de direccion 2');
  await page.getByRole('button', { name: 'Submit' }).click();
  await sleep(5000);
});