import { test, expect } from '@playwright/test';

test('Login Functionality Test', async ({ page }) => {
  // Navigate to the Wiley login page
  await page.goto('https://onlinelibrary.wiley.com/action/showLogin');

  // Fill in valid credentials
  await page.fill('input[name="username"]', 'valid_username');
  await page.fill('input[name="password"]', 'valid_password');

  // Click the login button
  await page.click('button[type="submit"]');

  // Validate successful login by checking for a user profile element
  const userProfile = await page.locator('a[href="/profile"]');
  await expect(userProfile).toBeVisible();
});
