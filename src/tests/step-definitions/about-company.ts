import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BrowserManager } from '../../utils/BrowserManager';

// About Company specific step definitions

// About Company specific step definitions

Then('User sees "About Company" text', async function () {
  const page = BrowserManager.getCurrentPage();
  const locator = page.getByText('About Company', { exact: false });
  await locator.waitFor({ state: 'visible', timeout: 10000 });
  const isVisible = await locator.isVisible();
  expect(isVisible).toBeTruthy();
});
