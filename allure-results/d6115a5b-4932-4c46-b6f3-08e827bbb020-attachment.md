# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: creatingacode.spec.js >> Creating a code
- Location: tests\creatingacode.spec.js:4:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | export class BasePage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |   }
  5  | 
  6  |   _getLocator(el) {
  7  |     return typeof el === 'string' ? this.page.locator(el) : el;
  8  |   }
  9  | 
  10 |   async goto(url, options) {
> 11 |     await this.page.goto(url, options);
     |                     ^ Error: page.goto: Test timeout of 30000ms exceeded.
  12 |   }
  13 | 
  14 |   async click(el, options) {
  15 |     const locator = this._getLocator(el);
  16 |     await locator.click(options);
  17 |   }
  18 | 
  19 |   async fill(el, text, options) {
  20 |     const locator = this._getLocator(el);
  21 |     await locator.fill(text, options);
  22 |   }
  23 | 
  24 |   async type(el, text, options) {
  25 |     const locator = this._getLocator(el);
  26 |     await locator.type(text, options);
  27 |   }
  28 | 
  29 |   async getText(el) {
  30 |     const locator = this._getLocator(el);
  31 |      return await locator.textContent();
  32 |    }
  33 | 
  34 |   async isVisible(el) {
  35 |    const locator = this._getLocator(el);
  36 |      return await locator.isVisible();
  37 |    }
  38 | 
  39 |    async waitForSelector(el, options) {
  40 |      if (typeof el === 'string') return await this.page.waitForSelector(el, options);
  41 |      return await el.waitFor(options);
  42 |    }
  43 | 
  44 |    async waitForLoadState(state = 'load') {
  45 |      await this.page.waitForLoadState(state);
  46 |   }
  47 | 
  48 |   async screenshot(opts = {}) {
  49 |     await this.page.screenshot(opts);
  50 |   }
  51 |  }
  52 | 
  53 | export default BasePage;
  54 | 
```