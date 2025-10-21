import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BrowserManager } from '../../utils/BrowserManager';

// Common step definitions that can be used across multiple features

Given('Web browser is at the Intradyn home page', async function () {
  // Close any existing browser first
  await BrowserManager.closeBrowser();
  
  // Create new browser instance for this feature
  const page = await BrowserManager.createPage();
  await page.goto('https://www.intradyn.com/', { waitUntil: 'domcontentloaded' });
  
  // Dismiss cookie/consent if present
  const consentBtn = page.getByRole('button', { name: /accept|agree|got it/i });
  try { 
    await consentBtn.first().click({ timeout: 2000 }); 
  } catch {
    // Consent popup not found or already dismissed
  }
});

When('User clicks on {string} link', async function (link: string) {
  const page = BrowserManager.getCurrentPage();
  const linkLocator = page.getByRole('link', { name: new RegExp(link, 'i') }).first();
  await linkLocator.waitFor({ state: 'visible', timeout: 10000 });
  await linkLocator.click();
});

When('User hovers over {string} link', async function (link: string) {
  const page = BrowserManager.getCurrentPage();
  const linkLocator = page.getByRole('link', { name: new RegExp(link, 'i') }).first();
  await linkLocator.waitFor({ state: 'visible', timeout: 10000 });
  await linkLocator.hover();
});

Then('User sees {string} link', async function (link: string) {
  const page = BrowserManager.getCurrentPage();
  const linkLocator = page.getByRole('link', { name: new RegExp(link, 'i') }).first();
  await linkLocator.waitFor({ state: 'visible', timeout: 10000 });
  const isVisible = await linkLocator.isVisible();
  expect(isVisible).toBeTruthy();
});

// Generic text validation removed to avoid conflicts with specific step definitions

// Cleanup after scenarios
Given('Browser is closed', async function () {
  await BrowserManager.closeBrowser();
});
