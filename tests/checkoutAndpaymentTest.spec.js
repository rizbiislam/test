const { test } = require('@playwright/test');
const LoginAction = require("../pages/loginPage/loginAction");
const loginData = require("../data/loginData.json");
const CartAction = require("../pages/cartPage/cartAction");
const cartData = require("../data/cartData.json");

test('this is complete checkout', async ({ page }) => {
  const login = new LoginAction(page);
  await page.goto('https://automationexercise.com');

  await login.clickOnProfileIcon();
  await login.enterEmail(loginData.validUser.email);
  await login.enterPassword(loginData.validUser.password);
  await login.clickOnSubmitButton();

  const cart = new CartAction(page);

  await cart.navigateToCart();
  await cart.proceedToCheckout();
  await cart.fillPaymentDetails(cartData.paymentDetails);
  await cart.confirmOrder();

  await page.screenshot({ path: 'screenshots/cartAndCheckout_success.png' });
});
