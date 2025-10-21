import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BrowserManager } from '../../utils/BrowserManager';
import { HomePage } from '../../pages/HomePage';
import { QuotePage } from '../../pages/QuotePage';
import { testData } from '../../config/TestConfig';

let homePage: HomePage;
let quotePage: QuotePage;

Given('Web browser is at the Intradyn home page', async function () {
  const page = await BrowserManager.createPage();
  homePage = new HomePage(page);
  await homePage.navigateToHomePage();
  await homePage.waitForHomePageToLoad();
});

When('User clicks on {string} button', async function (button: string) {
  if (button.toLowerCase().includes('request a quote')) {
    await homePage.clickRequestQuoteButton();
    // After clicking, we're now on the quote page
    const page = BrowserManager.getCurrentPage();
    quotePage = new QuotePage(page);
    await quotePage.waitForQuotePageToLoad();
  }
});

Then('User sees {string} text', async function (text: string) {
  if (text.toLowerCase().includes('request a custom quote')) {
    const isVisible = await quotePage.isRequestCustomQuoteTextVisible();
    expect(isVisible).toBeTruthy();
  } else {
    // For other text validations, you can add more specific logic
    const page = BrowserManager.getCurrentPage();
    const locator = page.getByText(text, { exact: false });
    await locator.waitFor({ state: 'visible', timeout: 10000 });
    const isVisible = await locator.isVisible();
    expect(isVisible).toBeTruthy();
  }
});

// Cleanup after scenarios
Given('Browser is closed', async function () {
  await BrowserManager.closeBrowser();
});
