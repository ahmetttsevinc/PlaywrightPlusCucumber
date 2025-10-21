import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BrowserManager } from '../../utils/BrowserManager';
import { HomePage } from '../../pages/HomePage';
import { QuotePage } from '../../pages/QuotePage';

let homePage: HomePage;
let quotePage: QuotePage;

// Request Quote specific step definitions

When('User clicks on "Request a Quote" button', async function () {
  const page = BrowserManager.getCurrentPage();
  homePage = new HomePage(page);
  await homePage.clickRequestQuoteButton();
  // After clicking, we're now on the quote page
  quotePage = new QuotePage(page);
  await quotePage.waitForQuotePageToLoad();
});

Then('User sees "Request a Custom Quote" text', async function () {
  const isVisible = await quotePage.isRequestCustomQuoteTextVisible();
  expect(isVisible).toBeTruthy();
});
