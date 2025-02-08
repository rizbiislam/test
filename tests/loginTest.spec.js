const { test, expect } = require("@playwright/test");
const LoginAction = require("../pages/loginPage/loginAction");
const loginData = require("../data/loginData.json");

test("Valid Login Test", async ({ page }) => {
  const login = new LoginAction(page);

  await page.goto('https://automationexercise.com/login');
  await login.clickOnProfileIcon();
  await login.enterEmail(loginData.validUser.email);
  await login.enterPassword(loginData.validUser.password);
  await login.clickOnSubmitButton();
  await login.logedinUserName();
  await page.screenshot({ path: 'screenshots/login_success.png', fullPage: true });
  //await login.logoutLink();
});

/*test("Delete Account Test", async ({ page }) => {
  const login = new LoginAction(page);

  await page.goto('https://automationexercise.com/login');
  await login.enterEmail(loginData.newUser.email);
  await login.enterPassword(loginData.newUser.password);
  await login.clickOnSubmitButton();
  //await login.clickOnDeleteAccount();
  //await page.screenshot({ path: 'screenshots/delete_success.png', fullPage: true });
});*/
