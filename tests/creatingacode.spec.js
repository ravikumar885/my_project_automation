import { test, expect } from '@playwright/test';
import { mypracticepom } from './pages/mypracticepom.js';

test('Creating a code', async ({ page }) => {
  const mypractice = new mypracticepom(page);
  await mypractice.gotologinurl();
  await mypractice.loginprocess('Admin', 'admin123');
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await mypractice.logoutprocess();
});


