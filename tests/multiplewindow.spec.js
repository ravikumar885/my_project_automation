import { test, expect } from '@playwright/test';

test('Multiple window handling', async ({ page, context }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Wait for the new tab to open while clicking the link
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('a:has-text("OrangeHRM, Inc")').click()
    ]);
    // Wait until the new page is fully loaded
    await newPage.waitForLoadState('domcontentloaded');
    // Print title
    console.log(await newPage.title());
    // Verify URL
    await expect(newPage).toHaveURL(/orangehrm/);
    // Switch back to parent page
    await page.bringToFront();
    console.log(await page.title());
});
