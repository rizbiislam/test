
# Playwright Automated Testing Framework 🚀

Welcome to the **Playwright Automated Testing Framework**! This repository contains a robust set of automated tests designed to validate the functionality of a web application using [Playwright](https://playwright.dev/). It covers key functionalities such as **login**, **product selection**, **checkout**, and **contact form submission**.

## 🌟 Overview

This testing framework ensures that your web application works as expected by automating end-to-end scenarios. With Playwright, you can run tests on different browsers, gather detailed reports, and easily maintain your tests in a structured way.

## 📋 Prerequisites

Before running the tests, ensure that you have the following software installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Playwright](https://playwright.dev/) (installed as a dev dependency)
- Git (for version control)

## 🔧 Installation

1. **Clone the repository**:
   Clone this repository to your local machine using Git:
   ```bash
   git clone <your-repository-url>
   cd <your-repository-folder>
   ```

2. **Install dependencies**:
   Install the necessary dependencies listed in `package.json`:
   ```bash
   npm install
   ```

## ⚡ Running Tests

To run all the tests in the project, follow these steps:

1. **Modify your data files** as needed (e.g., updating test credentials or other test-specific data).
2. **Run the tests** using the following command:
   ```bash
   npx playwright test
   ```

To run a **specific test file**, for example, `loginTest.spec.js`, use:
```bash
npx playwright test tests/loginTest.spec.js
```

### 🏃‍♂️ Run Specific Tests

You can also configure Playwright to run specific tests using the `testMatch` property in your `playwright.config.js`:

```javascript
testMatch: [
  'tests/signupTest.spec.js',
  'tests/loginTest.spec.js',
  'tests/categoryTest.spec.js',
  'tests/addtoCartTest.spec.js',
  'tests/checkoutAndpaymentTest.spec.js',
  'tests/contactUs.spec.js'
],
```

## 📊 Test Reporting

Playwright generates an **HTML report** after running tests, providing a comprehensive view of test results, including screenshots and trace information for any failures.

To view the latest test report:
```bash
npx playwright show-report
```

This will open the HTML report in your default browser, where you can explore the test results in detail.

## 📂 Directory Structure

Here’s an overview of the project structure:

```
project/
├── tests/
│   ├── signupTest.spec.js                    # Signup tests
│   ├── loginTest.spec.js                     # Login tests
│   ├── categoryTest.spec.js                  # Category selection tests
│   ├── addtoCartTest.spec.js                 # Product selection tests
│   ├── checkoutAndpaymentTest.spec.js        # Checkout tests
│   ├── contactUs.spec.js                     # Contact Us tests
├── .gitignore                                # Git ignore file
├── package.json                              # Project dependencies and scripts
├── playwright.config.js                      # Playwright configuration file
└── README.md                                 # Project readme (this file)
```

### 🗂️ Explanation of the Directory Structure:
- **tests/**: This folder contains all the test files. Each file represents a specific feature of the application.
- **.gitignore**: Specifies which files and directories Git should ignore, ensuring only relevant files are version-controlled.
- **package.json**: Manages project dependencies, scripts, and Playwright-specific configurations.
- **playwright.config.js**: The configuration file for Playwright, where settings such as `baseURL`, `headless mode`, `screenshot`, and retries are defined.
- **README.md**: This file, which provides documentation for setting up, running, and maintaining the project.

## ⚙️ Configuration

The Playwright configuration is defined in the `playwright.config.js` file, where you can customize several important settings:

- **baseURL**: The base URL of the web application being tested (configured via the `.env` file or set to a default value).
- **headless**: Determines whether tests should run in headless mode. Set to `false` for easier debugging.
- **screenshot**: Configured to capture screenshots when tests fail.
- **trace**: Collects traces on the first retry, helping you debug failed tests more effectively.

## ✨ Features

- **Cross-Browser Testing**: Test your application on Chromium, Firefox, and WebKit (Safari).
- **Parallel Execution**: Run tests in parallel to speed up execution (configurable).
- **Custom Test Suites**: Create and organize test files by feature (e.g., login, product selection, etc.).
- **Detailed Reporting**: View detailed HTML reports after every test run.

---

                                       🚀Happy testing! 🚀 
```
