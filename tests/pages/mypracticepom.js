import { BasePage } from '../BasePage.js';

export class mypracticepom extends BasePage {
  constructor(page) {
    super(page);
    this.username = page.getByPlaceholder('Username');
    this.password = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.userMenu = page.locator('.oxd-userdropdown-tab');
    this.logoutLink = page.getByText('Logout', { exact: true });
  }

  async gotologinurl() {
    await this.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async loginprocess(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async logoutprocess() {
    await this.userMenu.click();
    await this.logoutLink.click();
  }
}
