import{test,expect,chromium} from '@playwright/test'

test('switch window handle',async()=>{

   const browser= await chromium.launch();
  const context= await browser.newContext();
  const page1=await context.newPage();

  await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await expect(page1).toHaveTitle('OrangeHRM')

  const [page2] = await Promise.all([
    context.waitForEvent('page'),
    page1.locator('//a[text()="OrangeHRM, Inc"]').click()
  ]);

  await page2.waitForLoadState();
  await expect(page2).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM');

  


})





