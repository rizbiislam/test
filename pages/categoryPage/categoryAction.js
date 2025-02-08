const categoryLocator = require("./categoryLocator");

class categoryAction {
    constructor(page) {
        this.page = page;
    }

    async selectCategoryPanel(category) {
        await this.page.click(categoryLocator.categoryPanel(category));
    }

    async selectSubcategory(subcategory) {
        await this.page.click(categoryLocator.subcategoryLink(subcategory));
    }

    async printFirstProductDetails() {
        try {
            const productName = await this.page.textContent(categoryLocator.firstProduct);
            console.log(`First product Name: ${productName}`);
            await this.page.click(categoryLocator.firstProductCart);
        } catch (error) {
            console.error("Error retrieving product details:", error);
        }
    }

    async navigateToCategory(category, subcategory) {
        await this.selectCategoryPanel(category);
        await this.selectSubcategory(subcategory);
    }
}

module.exports = categoryAction;
