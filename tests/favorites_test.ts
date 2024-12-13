import { test, expect } from '@playwright/test';

test('Add to Favorites Test', async ({ page }) => {
  // Navigate to a specific article page
  await page.goto('https://onlinelibrary.wiley.com/doi/10.1002/example');

  // Log in before adding to favorites
  await page.click('a[href="/action/showLogin"]');
  await page.fill('input[name="username"]', 'valid_username');
  await page.fill('input[name="password"]', 'valid_password');
  await page.click('button[type="submit"]');

  // Click the 'Add to Favorites' button
  await page.click('button[data-action="add-to-favorites"]');

  // Validate that the article is added to the favorites list
  const favoriteMessage = await page.locator('.favorites-message');
  await expect(favoriteMessage).toContainText('added to your favorites');
});
