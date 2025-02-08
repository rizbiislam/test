class LoginLocator {
  get loginIcon() {
    return "//a[contains(text(), ' Signup / Login')]";
  }

  get loginEmailInput() {
    return "//input[@data-qa='login-email']";
  }

  get loginPasswordInput() {
    return "//input[@data-qa='login-password']";
  }

  get signupNameInput() {
    return "//input[@data-qa='signup-name']";
  }
  
  get signupEmailInput() {
    return "//input[@data-qa='signup-email']";
  }
    
  get buttonLogin() {
    return "//button[@data-qa='login-button']";
  }

  get buttonSignup() {
    return "//button[@data-qa='signup-button']";
  }

  get logoutLink() {
    return "//a[contains(text(),' Logout')]";
  }

  get logedinUser() {
    return "//a[contains(text(), ' Logged in as ')]";
  }

  get deleteAccount() {
    return "//a[contains(text(),' Delete Account')]";
  }
}

module.exports = new LoginLocator();
