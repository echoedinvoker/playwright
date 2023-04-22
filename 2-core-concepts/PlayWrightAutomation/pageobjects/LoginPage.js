export class LoginPage {
  constructor(page) {
    this.page = page
    this.email = page.locator("#userEmail")
    this.password = page.locator("#userPassword")
    this.login = page.locator("[value='Login']")
  }

  async goTo() {
    await this.page.goto("https://rahulshettyacademy.com/client");
  }

  async validLogin(mail, password) {
    await this.email.fill(mail)
    await this.password.fill(password)
    await this.login.click()
    await this.page.waitForLoadState("networkidle")
  }
}

