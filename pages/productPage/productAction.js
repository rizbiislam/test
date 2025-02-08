const productLocator = require("./productLocator");

class productAction {
  constructor(page) {
    this.page = page;
  }

  async clickOnproductIcon() {
      await this.page.locator(productLocator.productIcon).click();
  }

  async selectRandomProduct() {
    try {
      const products = await this.page.locator(productLocator.productList).elementHandles();

      if (products.length === 0) {
        throw new Error("No products found on the page.");
      }

      const randomIndex = Math.floor(Math.random() * products.length);
      const randomProduct = products[randomIndex];

      await randomProduct.click();
      console.log(`Clicked on 'View Product' for product #${randomIndex + 1}`);
    } catch (error) {
      console.error("Error selecting a random product:", error);
    }
  }

  async viewAndUpdateProduct(quantity) {
    await this.page.waitForSelector(productLocator.quantityField);
    await this.page.fill(productLocator.quantityField, quantity.toString());
    console.log(`Updated product quantity to: ${quantity}`);
  }
  async ButtonAddToCart(){
    try {
      await this.page.waitForSelector(productLocator.addToCartButton);
      await this.page.click(productLocator.addToCartButton);
      console.log("Add to Cart clicked");

    } catch (error) {
      console.error("Error viewing and updating product:", error);
    }
  }
}

module.exports = productAction;
