import { test, expect } from '@playwright/test';
import { loginpage } from './pages/loginpage.js';

test('Login to DemoBlaze through a page object', async ({ page }) => {
  const loginPage = new loginpage(page);

  await loginPage.launchapplication();
  await loginPage.login();

  await expect(page.locator('#nameofuser')).toContainText('pavanol');
  await expect(page.locator('#logout2')).toBeVisible();
});
