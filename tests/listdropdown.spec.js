import {test,expect} from '@playwright/test';

test('List Dropdown Test', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');

await page.locator('#country').selectOption('Japan');
//await page.locator('#country').selectOption({index:2})

//const listofdropdown=await page.locator('#country').selectOption();

const listofdropdown= await page.$$('//select[@id="country"]//option')

for(let dp of listofdropdown)
{
    console.log(await dp.textContent())
}

})