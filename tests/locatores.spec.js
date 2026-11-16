import {test,expect} from '@playwright/test'

test('Locators',async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

await page.getByPlaceholder('username').fill('Admin')
await page.getByPlaceholder('Password').fill('admin123')

await page.getByRole('button',{name:'login'}).click()



})