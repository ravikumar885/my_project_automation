import { expect } from '@playwright/test';

export default class getorder {
  constructor(page) {
    this.page = page;
    this.placeorder = page.locator('//button[text()="Place Order"]');
  }

  async clickonPlaceorder() {
    await this.placeorder.waitFor({ state: 'visible' });
    await this.placeorder.click();
  }
}
