const { test, expect } = require('@playwright/test');
const productActions = require('../pages/productPage/productAction');

const LoginAction = require("../pages/loginPage/loginAction");
const loginData = require("../data/loginData.json");

test.describe("Product Page Tests", () => {
  test("User should be able to select and update a product", async ({ page }) => {
    const actions = new productActions(page);
    const login = new LoginAction(page);
    await page.goto('https://automationexercise.com');
     
    await login.clickOnProfileIcon();
    await login.enterEmail(loginData.validUser.email);
    await login.enterPassword(loginData.validUser.password);
    await login.clickOnSubmitButton();
    await actions.clickOnproductIcon();
    await actions.selectRandomProduct();
    await actions.viewAndUpdateProduct("3");
    await page.screenshot({ path: 'screenshots/product_success.png', fullPage: true });
    await actions.ButtonAddToCart();

    console.log("Product selection and update test passed.");
  });
});
