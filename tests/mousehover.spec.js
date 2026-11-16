import {test,expect} from '@playwright/test'

test('mouse hover',async({page})=>{
await page.goto('https://www.nopcommerce.com/en?srsltid=AfmBOoqZPfQJ0xGdP3mXv9Lw-e2DvOhUGLpp6IW41SFGy3mq0dTPjtvE')

const product=await page.locator('//span[text()="Product"]');

await product.hover()

const show=await page.locator('//span[text()="Showcase"]')
await show.hover()
await show.click()
await page.getByAltText('Downloads').click();


})