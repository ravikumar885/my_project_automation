import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BasePage } from '../BasePage.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const testdata = JSON.parse(fs.readFileSync(path.join(__dirname, '../testdata.json'), 'utf-8'));

export class loginpage extends BasePage {
  constructor(page) {
    super(page);
    this.lginlink = page.locator('#login2');
    this.username = page.locator('#loginusername');
    this.password = page.locator('#loginpassword');
    this.loginButton = page.locator('//button[@onclick="logIn()"]');
    this.baseUrl = process.env.BASE_URL || 'https://www.demoblaze.com/';
    this.envUsername = process.env.LOGIN_USERNAME || testdata.logindata.username;
    this.envPassword = process.env.LOGIN_PASSWORD || testdata.logindata.password;
  }

  async launchapplication() {
    await this.goto(this.baseUrl);
    await this.click(this.lginlink);
  }

  async login(username = this.envUsername, password = this.envPassword) {
    await this.fill(this.username, username);
    await this.fill(this.password, password);
    // accept any alert/dialog that may appear on login (invalid creds, etc.)
    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });
    await this.click(this.loginButton);

    // Wait for either the login modal to hide or for the user name to appear
    try {
      await Promise.race([
        this.page.waitForSelector('#logInModal', { state: 'hidden', timeout: 5000 }),
        this.page.waitForSelector('#nameofuser', { state: 'visible', timeout: 5000 })
      ]);
    } catch (e) {
      // continue even if neither appears in time; subsequent steps may fail and report errors
    }
  }
}