# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mousehover.spec.js >> mouse hover
- Location: tests\mousehover.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.hover: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//span[text()="Product"]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - img "Icon for www.nopcommerce.com" [ref=e5]
        - heading "www.nopcommerce.com" [level=1] [ref=e6]
      - heading "Performing security verification" [level=2] [ref=e7]
      - paragraph [ref=e8]: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
  - contentinfo [ref=e13]:
    - generic [ref=e15]:
      - generic [ref=e17]:
        - text: "Ray ID:"
        - code [ref=e18]: a5b54055fe4aa7a6
      - generic [ref=e19]:
        - generic [ref=e20]:
          - text: Performance and Security by
          - link "Cloudflare, opens in a new tab" [ref=e21] [cursor=pointer]:
            - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
            - text: Cloudflare
        - link "Privacy, opens in a new tab" [ref=e23] [cursor=pointer]:
          - /url: https://www.cloudflare.com/privacypolicy/
          - text: Privacy
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test('mouse hover',async({page})=>{
  4  | await page.goto('https://www.nopcommerce.com/en?srsltid=AfmBOoqZPfQJ0xGdP3mXv9Lw-e2DvOhUGLpp6IW41SFGy3mq0dTPjtvE')
  5  | 
  6  | const product=await page.locator('//span[text()="Product"]');
  7  | 
> 8  | await product.hover()
     |               ^ Error: locator.hover: Test timeout of 30000ms exceeded.
  9  | 
  10 | const show=await page.locator('//span[text()="Showcase"]')
  11 | await show.hover()
  12 | await show.click()
  13 | await page.getByAltText('Downloads').click();
  14 | 
  15 | 
  16 | })
```