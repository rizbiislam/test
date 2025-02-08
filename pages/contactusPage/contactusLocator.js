class contactusLocator {
    get contactUsLink() {
      return "//a[contains(text(), ' Contact us')]";
    }
  
    get nameField() {
      return "//input[@name='name']";
    }
  
    get emailField() {
      return "//input[@name='email']";
    }
  
    get subjectField() {
      return "//input[@name='subject']";
    }
  
    get messageField() {
      return "//textarea[@name='message']";
    }
  
    get uploadFileField() {
      return "//input[@name='upload_file']";
    }
  
    get submitButton() {
      return "//input[@name='submit']";
    }
  }
  
  module.exports = new contactusLocator();
  