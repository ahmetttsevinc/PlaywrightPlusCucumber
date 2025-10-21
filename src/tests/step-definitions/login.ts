import { Given, When, Then } from '@cucumber/cucumber';
import { Page, Browser, chromium, expect } from '@playwright/test';

let browser: Browser;
let page: Page;

Given('Web browser is at the Intradyn home page', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://www.intradyn.com/', { waitUntil: 'domcontentloaded' });

  // Dismiss cookie/consent if present
  const consentBtn = page.getByRole('button', { name: /accept|agree|got it/i });
  try { await consentBtn.first().click({ timeout: 2000 }); } catch {}
});

When('User clicks on {string} button', async function (button: string) {
  // Many “buttons” on this site are actually links
  const target = page.getByRole('link', { name: new RegExp(button, 'i') }).first();
  await target.waitFor({ state: 'visible', timeout: 10000 });
  await target.click();
});

Then('User sees {string} text', async function (text: string) {
  const locator = page.getByText(text, { exact: false });
  await locator.waitFor({ state: 'visible', timeout: 10000 });
  const isVisible = await locator.isVisible();
  expect(isVisible).toBeTruthy();
});
