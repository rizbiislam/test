class checkoutLocator {
    get nameOnCardField() {
        return "//input[@name='name_on_card']";
    }

    get cardNumberField() {
        return "//input[@name='card_number']";
    }

    get cvcField() {
        return "//input[@name='cvc']";
    }

    get expiryMonthField() {
        return "//input[@name='expiry_month']";
    }
    
    get expiryYearField() {
        return "//input[@name='expiry_year']";
    }
    
    get placeOrderButton() {
        return "//button[@data-qa='place-order']";
    }
}

module.exports = new checkoutLocator();
