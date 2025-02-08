class categoryLocator {
  categoryPanel(category) {
      return `//div[@class="panel-heading"]//a[contains(normalize-space(.), '${category}')]`;
  }

  subcategoryLink(subcategory) {
      return `//div[@class="panel-body"]//a[contains(normalize-space(.), '${subcategory}')]`;
  }

  get firstProduct() {
      return "//div[@class='productinfo text-center']//p";
  }

  get firstProductCart() {
      return "(//div[@class='productinfo text-center']//p)[2]";
  }

  get featuresItems() {
      return "//div[@class='features_items']";
  }
}

module.exports = new categoryLocator();
