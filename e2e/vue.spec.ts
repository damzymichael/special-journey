import {test, expect} from '@playwright/test';

test('Check for heading', async ({page}) => {
  await page.goto('/');
  await expect(page.locator('main > h3')).toHaveText('Rhapsody Merch Store');
});
