const signupLocators = require("../signupPage/signupLocator");

class SignupActions {
  constructor(page) {
    this.page = page;
  }

  async fillPassword(password) {
    await this.page.locator(signupLocators.passwordField).fill(password);
  }

  async selectGender() {
    await this.page.locator(signupLocators.genderMaleRadio).check();
  }

  async selectDateOfBirth(dob) {
    await this.page.locator(signupLocators.dobDayDropdown).selectOption(dob.day);
    await this.page.locator(signupLocators.dobMonthDropdown).selectOption(dob.month);
    await this.page.locator(signupLocators.dobYearDropdown).selectOption(dob.year);
  }

  async fillAddress(address) {
    await this.page.locator(signupLocators.addressField1).fill(address.line1);
    if (address.line2) {
      await this.page.locator(signupLocators.addressField2).fill(address.line2);
    }
    await this.page.locator(signupLocators.cityField).fill(address.city);
    await this.page.locator(signupLocators.stateField).fill(address.state);
    await this.page.locator(signupLocators.countryDropdown).selectOption(address.country);
    await this.page.locator(signupLocators.zipcodeField).fill(address.zipcode);
  }

  async fillPersonalDetails(firstName, lastName, mobileNumber) {
    await this.page.locator(signupLocators.firstNameField).fill(firstName);
    await this.page.locator(signupLocators.lastNameField).fill(lastName);
    await this.page.locator(signupLocators.mobileNumberField).fill(mobileNumber);
  }

  async submitForm() {
    await this.page.locator(signupLocators.submitButton).click();
  }

  async message() {
    const successMessage = await this.page.locator(signupLocators.sucessfulMessage).textContent();
    console.log(successMessage);
  }

  async buttonContinue() {
    await this.page.locator(signupLocators.continuebutton).click();
  }

  async completeSignupForm(data) {
    const { password, dob, address, firstName, lastName, mobileNumber } = data;

    await this.fillPassword(password);
    await this.selectGender();
    await this.selectDateOfBirth(dob);
    await this.fillAddress(address);
    await this.fillPersonalDetails(firstName, lastName, mobileNumber);
    await this.submitForm();
  }
}

module.exports = SignupActions;
