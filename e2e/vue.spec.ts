import {test, expect} from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('Check for heading', async ({page}) => {
  await page.goto('/');
  await expect(page.locator('main > h3')).toHaveText('Rhapsody Merch Store');
});
