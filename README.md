# Playwright + Cucumber with Page Object Model

End-to-end testing framework using Playwright, Cucumber, and Page Object Model pattern.

## Quick Start

```bash
npm install
npm run test
```

## Structure

```
src/
├── pages/           # Page Object classes
├── utils/           # Browser management
├── config/          # Test configuration
└── tests/           # Features & step definitions
```

## Scripts

- `npm run test` - Run tests
- `npm run test:headless` - Run headless tests
- `npm run cucumber` - Run cucumber directly

## Reports

Generated in `reports/` folder:
- HTML report: `cucumber-report.html`
- Screenshots: `screenshots/`
