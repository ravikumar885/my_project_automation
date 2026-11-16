const { test, expect } = require('@playwright/test');
const { DemoblazeLoginPage } = require('./pages/demoblazeLoginPage');

test('Login to DemoBlaze through a page object', async ({ page }) => {
  const loginPage = new DemoblazeLoginPage(page);

  await loginPage.gotoHomePage();
  await loginPage.login('pavanol', 'test@123');
  await loginPage.verifyHomepageContext('pavanol');

  await expect(page.locator('#logout2')).toBeVisible();
});
