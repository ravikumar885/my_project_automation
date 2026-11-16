import {test,expect} from '@playwright/test';

test('check box',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')

await page.locator('#sunday').check()
await page.locator('#sunday').uncheck()

const checkboxlist=await page.$$('//div[@class="form-check form-check-inline"]//input[@type="checkbox"]');
const testdata=[

    '#sunday',
    '#monday',
    '#tuesday'

]

for(const list of testdata)
{
    await page.locator(list).check()
}

for(const list of testdata)
{
    await page.locator(list).uncheck()
}

await page.screenshot({path:'pages/mypage.png',fullPage:true})

await page.locator('//input[@id="singleFileInput"]').click();
await page.locator('//input[@id="singleFileInput"]').setInputFiles('C:/Work place/student.json')
await page.locator('//a[text()="merrymoonmary"]').click();


await page.bringBack()


})