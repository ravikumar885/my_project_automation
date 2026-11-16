import { expect } from '@playwright/test';

export class category {
  constructor(page) {
    this.page = page;
    this.categorylist = page.locator('//div[@class="list-group"]//a');
    this.clcikphone = page.locator('//a[text()="Samsung galaxy s6"]');
    this.addtocart= page.locator('//a[@onclick="addToCart(1)"]')
    this.cartlist= page.locator('//a[text()="Cart"]')
    this.products =page.locator('//div[@class="col-lg-8"]//h2');
  }

  async verifycategorylist() {
    const categorycount = await this.categorylist.count();
    console.log('Total category count is ' + categorycount);
    await expect(this.categorylist.first()).toBeVisible();
    await expect(this.categorylist).toContainText(['CATEGORIES', 'Phones', 'Laptops', 'Monitors']);
  }

  async clickongalaxy() {
    await this.page.waitForTimeout(2000);
    await this.clcikphone.click();
  }

  async addtocartList() {

    await this.addtocart.waitFor({ state: 'visible' });
    await this.addtocart.click();
  }

  async verifycartlist() {
    await this.cartlist.click();
    await expect(this.products).toBeVisible();
    await expect(this.products).toContainText('Products');
  }
}