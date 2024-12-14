/*
Objective: To verify that the search bar on the Wiley Online Library homepage works correctly and displays relevant results for a valid keyword.
Steps:
• Open the browser and navigate to the Wiley Online Library homepage.
• Enter a valid keyword (e.g., "machine learning") in the search bar.
• Click the search button.
• Validate that search results are displayed and relevant to the keyword entered.
Expected Outcome: Relevant search results are displayed for the provided keyword.
*/

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
