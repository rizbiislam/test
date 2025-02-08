const { test, expect } = require('@playwright/test');
const contactusAction = require('../pages/contactusPage/contactusAction');
const contactusData = require('../data/contactusData.json');

test.describe("Contact Us Form", () => {
  test("User should be able to submit the contact us form", async ({ page }) => {
    const actions = new contactusAction(page);

    await page.goto("https://automationexercise.com");

    await actions.clickOnContactUsLink();
    await actions.enterName(contactusData.name);
    await actions.enterEmail(contactusData.email);
    await actions.enterSubject(contactusData.subject);
    await actions.enterMessage(contactusData.message);
    if (contactusData.filePath) {
      await actions.fileUpload(contactusData.filePath);
    }
    await page.screenshot({ path: 'screenshots/contuctUs_success.png', fullPage: true });
    await actions.clickSubmitButton();
    //const successMessage = await page.locator("//div[contains(text(), 'Your message has been sent')]").isVisible();
    //expect(successMessage).toBeTruthy();
    
    console.log("Contact Us form submitted successfully.");
  });
});
