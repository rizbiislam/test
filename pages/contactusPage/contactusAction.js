const contactusLocator = require("./contactusLocator");

class contactusAction {
    constructor(page) {
        this.page = page;
    }

    async clickOnContactUsLink() {
        await this.page.click(contactusLocator.contactUsLink);
    }

    async enterName(name) {
        await this.page.fill(contactusLocator.nameField, name);
    }

    async enterEmail(email) {
        await this.page.fill(contactusLocator.emailField, email);
    }

    async enterSubject(subject) {
        await this.page.fill(contactusLocator.subjectField, subject);
    }

    async enterMessage(message) {
        await this.page.fill(contactusLocator.messageField, message);
    }

    async fileUpload(filePath) {
        await this.page.setInputFiles(contactusLocator.uploadFileField, filePath);
    }

    async clickSubmitButton() {
        await this.page.click(contactusLocator.submitButton);
    }
}

module.exports = contactusAction;
