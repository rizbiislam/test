const loginLocator = require("./loginLocator");

class loginAction {
  constructor(page) {
    this.page = page;
  }

  async clickOnProfileIcon() {
    await this.page.locator(loginLocator.loginIcon).click();
  }

  async enterEmail(email) {
    await this.page.locator(loginLocator.loginEmailInput).fill(email);
  }

  async enterPassword(password) {
    await this.page.locator(loginLocator.loginPasswordInput).fill(password);
  }

  async clickOnSubmitButton() {
    await this.page.locator(loginLocator.buttonLogin).click();
  }

  async logedinUserName() {
    const userName = await this.page.locator(loginLocator.logedinUser).innerText();
    console.log("Logged in user:", userName);
  }


  async enterSignupName(name) {
    await this.page.locator(loginLocator.signupNameInput).fill(name);
  }

  async enterSignupEmail(email) {
    await this.page.locator(loginLocator.signupEmailInput).fill(email);
  }

  async clickOnSignupButton() {
    await this.page.locator(loginLocator.buttonSignup).click();
  }

  async clickOnLogout() {
    await this.page.locator(loginLocator.logoutLink).click();
  }

  async clickOnDeleteAccount() {
    await this.page.locator(loginLocator.deleteAccount).click();
  }
}

module.exports = loginAction;
