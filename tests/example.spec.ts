import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('køb mælk');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('køb aftensmad');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('skriv til lægen');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('listitem').filter({ hasText: 'køb mælk' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
  await page.getByRole('link', { name: 'Active' }).click();
});