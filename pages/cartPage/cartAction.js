const cartLocator = require("./cartLocator");

class cartAction {
    constructor(page) {
        this.page = page;
    }

    async navigateToCart() {
      await this.page.click(cartLocator.cartButton);
      await this.page.waitForSelector(cartLocator.proceedToCheckoutButton, { state: 'visible' });
    }

    async proceedToCheckout() {
        await this.page.click(cartLocator.proceedToCheckoutButton);
        await this.page.waitForSelector(cartLocator.placeOrderButton, { state: 'visible' });
        await this.page.click(cartLocator.placeOrderButton);
        await this.page.waitForSelector(cartLocator.paymentForm.nameField, { state: 'visible' });
    }

    async fillPaymentDetails(paymentDetails) {
        const { name, cardNumber, cvc, expirationMonth, expirationYear } = paymentDetails;

        await this.page.fill(cartLocator.paymentForm.nameField, name);
        await this.page.fill(cartLocator.paymentForm.cardNumberField, cardNumber);
        await this.page.fill(cartLocator.paymentForm.cvcField, cvc);
        await this.page.fill(cartLocator.paymentForm.expirationMonthField, expirationMonth);
        await this.page.fill(cartLocator.paymentForm.expirationYearField, expirationYear);
    }

    async confirmOrder() {
      await this.page.click(cartLocator.confirmOrderButton);
    }
}

module.exports = cartAction;
