const { test, expect } = require('@playwright/test');
const categoryAction = require("../pages/categoryPage/categoryAction");
const categoryData = require("../data/categoryData.json");
const fs = require('fs');

test('Navigate to Men > Jeans and print first product details', async ({ page }) => {
    const categoryPage = new categoryAction(page);
    await page.goto('https://automationexercise.com');
    
    const { category, subcategory } = categoryData;

    await categoryPage.navigateToCategory(category, subcategory);
    await categoryPage.printFirstProductDetails();


    await page.screenshot({ path: 'screenshots/category_success.png', fullPage: true });
    /*const screenshotPath = 'screenshots/category_success.png';
    fs.mkdirSync('screenshots', { recursive: true });
    await page.screenshot({ path: screenshotPath });

    console.log(`Screenshot saved at: ${screenshotPath}`);*/
});
