/*Objective: To ensure that a registered user can log in successfully to their account.
Steps:
•	Open the browser and navigate to the login page.
•	Enter valid credentials (username and password).
•	Click the login button.
•	Validate that the user is redirected to their homepage or dashboard after logging in.
•	Expected Outcome: The user is logged in, and the dashboard is displayed.
*/

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
