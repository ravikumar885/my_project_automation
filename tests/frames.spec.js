import {test,expect} from '@playwright/test'

test('frames',async({page})=>{
await page.goto('https://ui.vision/demo/webtest/frames/')

const totalframe=await page.frames()

console.log(totalframe.length)

await page.frame('https://ui.vision/demo/webtest/frames/frame_1')
//await page.getByAltText('mytext1').fill('Hello')


})