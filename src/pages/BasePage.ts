import { Page, Locator } from '@playwright/test';

export abstract class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigate to a specific URL
     */
    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    }

    /**
     * Wait for page to be fully loaded
     */
    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Get page title
     */
    async getTitle(): Promise<string> {
        return await this.page.title();
    }

    /**
     * Check if element is visible
     */
    async isElementVisible(locator: Locator): Promise<boolean> {
        return await locator.isVisible();
    }

    /**
     * Wait for element to be visible
     */
    async waitForElement(locator: Locator, timeout: number = 10000): Promise<void> {
        await locator.waitFor({ state: 'visible', timeout });
    }

    /**
     * Click on element with wait
     */
    async clickElement(locator: Locator): Promise<void> {
        await this.waitForElement(locator);
        await locator.click();
    }

    /**
     * Get text content of element
     */
    async getElementText(locator: Locator): Promise<string> {
        await this.waitForElement(locator);
        return await locator.textContent() || '';
    }

    /**
     * Dismiss cookie/consent popups if present
     */
    async dismissConsentPopup(): Promise<void> {
        const consentBtn = this.page.getByRole('button', { name: /accept|agree|got it/i });
        try {
            await consentBtn.first().click({ timeout: 2000 });
        } catch {
            // Consent popup not found or already dismissed
        }
    }
}
