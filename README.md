# Endava WEB UI Testing Project

This project provides automated tests for the public web site [https://www.saucedemo.com/](https://www.saucedemo.com/), built using **TypeScript** and the **Playwright** framework.

## 📁 Project Structure

<pre>
📁 project-root/
│
├── 📁 pages/                      # Page Object Model (POM). Contains locators and navigations for pages
│   ├── cartPage.ts
│   ├── checkoutCompletePage.ts
│   ├── checkoutStepOnePage.ts
│   ├── checkoutStepTwoPage.ts
│   ├── homePage.ts
│   └── inventoryPage.ts
│
├── 📁 tests/                      # Test modules organized by scenarios
│   └── 📁 version-1/
│       ├── scenario1.spec.ts
│       └── scenario2.spec.ts
│
├── 📁 utils/                      # General-purpose utility functions
│   └── utils.ts
│
├── playwright.config.ts           # Playwright configurations
└── tsconfig.json                  # TypeScript settings
</pre>

## ⚙️ Requirements

- TypeScript
- [Playwright](https://playwright.dev/)


## 🚀 How to Run Tests
```npx playwright test```

## 🚀 How to Run Specific Tests
If tests are grouped by tags "smoke", "regression":
* ```npx playwright test -g "smoke"```<br>
* ```npx playwright test -g "regression"```

## ✅ Features Covered
1. Scenario 1:
    * Log in with the standard user
    * Add the first and the last item in the cart, verify the correct items are added
    * Remove the first item and add previous to the last item to the cart, verify the content again
    * Go to checkout
    * Finish the order
    * Verify order is placed
    * Verify cart is empty
    * Logout from the system
2. Scenario 2:
    * Log in with the standard user
    * Verify when for sorting it is selected "Price (high to low)"
    * Then the items are sorted in the correct manner
    * Logout from the system

## 📝 Notes
* baseURL is defined in playwright.config.ts and shared across tests
* Tests are configured to be run on "chromium", "firefox" and "webkit" browsers
* "headless" mode is configured to "true"
* Project is designed to be scalable and extendable

## 👤 Author - Georgi Bordukov, Senior Software QA Engineer
* LinkedIn profile - https://www.linkedin.com/in/george-bordukov/
* Created as part of the testing task for Endava, using TypeScript, and Playwright