import { test, expect } from '@playwright/test';

test('Search Functionality Test', async ({ page }) => {
  // Navigate to the Wiley Online Library homepage
  await page.goto('https://onlinelibrary.wiley.com/');

  // Locate the search bar and enter a keyword
  await page.fill('input[name="searchTerm"]', 'machine learning');

  // Click the search button
  await page.click('button[type="submit"]');

  // Locate the search results
  const results = await page.locator('.search-results__item');

  // Validate that at least one result is displayed
  const count = await results.count();
  expect(count).toBeGreaterThan(0);
});
