class cartLocator {
  get cartButton() {
    return "//a[contains(text(), ' Cart')]";
  }

  get proceedToCheckoutButton() {
    return "//a[contains(text(), 'Proceed To Checkout')]";
  }

  get placeOrderButton() {
    return "//a[contains(text(), 'Place Order')]";
  }

  get paymentForm() {
    return {
      nameField: "//input[@name='name_on_card']",
      cardNumberField: "//input[@name='card_number']",
      cvcField: "//input[@name='cvc']",
      expirationMonthField: "//input[@name='expiry_month']",
      expirationYearField: "//input[@name='expiry_year']",
    };
  }

  get confirmOrderButton() {
    return "//button[contains(text(), 'Pay and Confirm Order')]";
  }
}

module.exports = new cartLocator();
