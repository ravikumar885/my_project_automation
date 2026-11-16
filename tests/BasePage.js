export class BasePage {
  constructor(page) {
    this.page = page;
  }

  _getLocator(el) {
    return typeof el === 'string' ? this.page.locator(el) : el;
  }

  async goto(url, options) {
    await this.page.goto(url, options);
  }

  async click(el, options) {
    const locator = this._getLocator(el);
    await locator.click(options);
  }

  async fill(el, text, options) {
    const locator = this._getLocator(el);
    await locator.fill(text, options);
  }

  async type(el, text, options) {
    const locator = this._getLocator(el);
    await locator.type(text, options);
  }

  async getText(el) {
    const locator = this._getLocator(el);
     return await locator.textContent();
   }

  async isVisible(el) {
   const locator = this._getLocator(el);
     return await locator.isVisible();
   }

   async waitForSelector(el, options) {
     if (typeof el === 'string') return await this.page.waitForSelector(el, options);
     return await el.waitFor(options);
   }

   async waitForLoadState(state = 'load') {
     await this.page.waitForLoadState(state);
  }

  async screenshot(opts = {}) {
    await this.page.screenshot(opts);
  }
 }

export default BasePage;
