const checkoutLocator = require("./checkoutLocator");

class CheckoutAction {

    async enterCardName(cardName) {
        await checkoutLocator.nameOnCardField.setValue(cardName);
    }

    async enterCardNumber(cardNumber) {
        await checkoutLocator.cardNumberField.setValue(cardNumber);
    }

    async enterCvc(cvc) {
        await checkoutLocator.cvcField.setValue(cvc);
    }

    async enterExpiryMonth(cardMonth) {
        await checkoutLocator.expiryMonthField.setValue(cardMonth);
    }

    async enterExpiryYear(cardYear) {
        await checkoutLocator.expiryYearField.setValue(cardYear);
    }

    async placeOrder() {
        await checkoutLocator.placeOrderButton.click();
    }
    
    async fillPaymentDetails(paymentDetails) {
        const { nameOnCard, cardNumber, cvc, expiryMonth, expiryYear } = paymentDetails;
        await this.enterCardName(nameOnCard);
        await this.enterCardNumber(cardNumber);
        await this.enterCvc(cvc);
        await this.enterExpiryMonth(expiryMonth);
        await this.enterExpiryYear(expiryYear);
    }
}

module.exports = new CheckoutAction();
