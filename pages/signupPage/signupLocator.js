class SignupLocators { 
  get passwordField() {
    return "//input[@data-qa='password']";
  }

  get genderMaleRadio() {
    return "//input[@id='id_gender1']";
  }

  get addressField1() {
    return "//input[@id='address1']";
  }

  get addressField2() {
    return "//input[@id='address2']";
  }

  get cityField() {
    return "//input[@id='city']";
  }

  get stateField() {
    return "//input[@id='state']";
  }

  get countryDropdown() {
    return "//select[@id='country']";
  }

  get zipcodeField() {
    return "//input[@id='zipcode']";
  }

  get firstNameField() {
    return "//input[@id='first_name']";
  }

  get lastNameField() {
    return "//input[@id='last_name']";
  }

  get mobileNumberField() {
    return "//input[@id='mobile_number']";
  }

  get submitButton() {
    return "//button[@data-qa='create-account']";
  }

  get dobDayDropdown() {
    return "//select[@id='days']";
  }

  get dobMonthDropdown() {
    return "//select[@id='months']";
  }

  get dobYearDropdown() {
    return "//select[@id='years']";
  }

  get sucessfulMessage(){
    return "//h2[@data-qa='account-created']";
  }

  get continuebutton(){
    return "//a[@data-qa='continue-button']";
  }
}

module.exports = new SignupLocators();
