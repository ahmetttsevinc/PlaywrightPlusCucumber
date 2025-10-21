import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    // Locators
    private readonly requestQuoteButton: Locator;
    private readonly navigationMenu: Locator;
    private readonly pageTitle: Locator;

    constructor(page: Page) {
        super(page);
        this.requestQuoteButton = page.getByRole('link', { name: /request a quote/i }).first();
        this.navigationMenu = page.locator('nav');
        this.pageTitle = page.locator('h1, h2, h3').first();
    }

    /**
     * Navigate to Intradyn home page
     */
    async navigateToHomePage(): Promise<void> {
        await this.navigateTo('https://www.intradyn.com/');
        await this.dismissConsentPopup();
        await this.waitForPageLoad();
    }

    /**
     * Click on Request a Quote button
     */
    async clickRequestQuoteButton(): Promise<void> {
        await this.clickElement(this.requestQuoteButton);
    }

    /**
     * Check if Request a Quote button is visible
     */
    async isRequestQuoteButtonVisible(): Promise<boolean> {
        return await this.isElementVisible(this.requestQuoteButton);
    }

    /**
     * Get page title text
     */
    async getPageTitleText(): Promise<string> {
        return await this.getElementText(this.pageTitle);
    }

    /**
     * Check if navigation menu is present
     */
    async isNavigationMenuVisible(): Promise<boolean> {
        return await this.isElementVisible(this.navigationMenu);
    }

    /**
     * Wait for page to be fully loaded
     */
    async waitForHomePageToLoad(): Promise<void> {
        await this.waitForElement(this.requestQuoteButton);
    }
}
