# Playwright + Cucumber with Page Object Model

Modern end-to-end testing framework built with **BDD (Behavior Driven Development)** approach using **Page Object Model** architecture.

## 🏗️ Architecture & Technologies

This project combines **Cucumber.js** for BDD testing with **Playwright** for browser automation, structured around the **Page Object Model** pattern. **Gherkin** syntax enables business-readable test scenarios, while **TypeScript** ensures type safety throughout the codebase.

The **Page Object Model** encapsulates page elements and actions within dedicated classes, with a **BasePage** abstract class providing common functionality. This approach separates UI logic from test logic, making the codebase maintainable and scalable. The **BrowserManager** utility centralizes browser lifecycle management, including initialization, cleanup, and screenshot capture.

The framework supports both **headless and headed execution modes** for flexible test runs. **Feature files** define test scenarios at a business level, while **step definitions** provide technical implementation. **Common actions** are shared across features for code reusability, with automatic HTML/JSON report generation including screenshots for failed tests.

## 🚀 Quick Start

```bash
npm install
npm run test
```

## 📁 Project Structure

```
src/
├── pages/           # Page Object classes
│   ├── BasePage.ts     # Abstract base class
│   ├── HomePage.ts     # Home page object
│   └── QuotePage.ts    # Quote page object
├── utils/           # Utility classes
│   └── BrowserManager.ts # Browser lifecycle
├── config/          # Configuration
│   └── TestConfig.ts    # Test settings
└── tests/           # Test files
    ├── features/        # Gherkin scenarios
    └── step-definitions/ # Step implementations
```

## 🧪 Scripts

- `npm run test` - Run tests with browser
- `npm run test:headless` - Run headless tests
- `npm run cucumber` - Run cucumber directly

## 📊 Reports

Generated in `reports/` folder:
- **HTML Report** - `cucumber-report.html`
- **JSON Report** - `cucumber-report.json`
- **Screenshots** - `screenshots/` (on failures)

## 🎯 Benefits

- **BDD Approach** - Business-readable test scenarios
- **POM Pattern** - Maintainable and scalable test code
- **TypeScript** - Type safety and better IDE support
- **Cross-browser** - Playwright's multi-browser support
- **Parallel Execution** - Independent test scenarios
- **Rich Reporting** - Detailed test results and screenshots
