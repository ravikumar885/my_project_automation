const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  page.setDefaultTimeout(90000);

  try {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'networkidle' });
    console.log('initial title:', await page.title());
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await page.waitForTimeout(10000);
    console.log('new url:', page.url());
    console.log('body text snippet:', (await page.locator('body').innerText()).slice(0, 6000));
  } catch (error) {
    console.error(error);
  } finally {
    await browser.close();
  }
})();
