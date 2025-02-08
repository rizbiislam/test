const { test, expect } = require("@playwright/test");
const LoginAction = require("../pages/loginPage/loginAction");
const SignupActions = require("../pages/signupPage/signupAction");
const loginData = require("../data/loginData.json");
const signupData = require("../data/signupData.json");

/*test("Signup Test", async ({ page }) => {
    const login = new LoginAction(page);
  
    await login.clickOnProfileIcon();
    await login.enterSignupName(loginData.newUser.name);
    await login.enterSignupEmail(loginData.newUser.email);
    await login.clickOnSignupButton();
  
    await expect(page.locator("//h2[contains(text(), 'Account Created')]")).toBeVisible();
  });*/

test("Signup Test", async ({ page }) => {
  const signup = new SignupActions(page);
  const login = new LoginAction(page);
  
  await page.goto('https://automationexercise.com/login');
  await login.enterSignupName(loginData.newUser.name);
  await login.enterSignupEmail(loginData.newUser.email);
  await login.clickOnSignupButton();

  await signup.completeSignupForm(signupData.newUser);

  await signup.message();
  await page.screenshot({ path: 'screenshots/signup_success.png', fullPage: true });
  await signup.buttonContinue();

  //await login.logoutLink();

});

