class productLocator {
    get productIcon() {
        return "//a[contains(text(), ' Products')]";
      }

    get productList() {
      return "//a[contains(text(), 'View Product')]";
    }
  
    get quantityField() {
      return "//input[@id='quantity']";
    }
  
    get addToCartButton() {
      return "//button[i[contains(@class, 'fa-shopping-cart')]]";
    }
  }
  
  module.exports = new productLocator();
  