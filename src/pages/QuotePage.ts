import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class QuotePage extends BasePage {
    // Locators
    private readonly requestCustomQuoteText: Locator;
    private readonly quoteForm: Locator;
    private readonly submitButton: Locator;

    constructor(page: Page) {
        super(page);
        this.requestCustomQuoteText = page.getByText('Request a Custom Quote', { exact: false });
        this.quoteForm = page.locator('form');
        this.submitButton = page.getByRole('button', { name: /submit|send|request/i });
    }

    /**
     * Check if "Request a Custom Quote" text is visible
     */
    async isRequestCustomQuoteTextVisible(): Promise<boolean> {
        return await this.isElementVisible(this.requestCustomQuoteText);
    }

    /**
     * Wait for quote page to load
     */
    async waitForQuotePageToLoad(): Promise<void> {
        await this.waitForElement(this.requestCustomQuoteText);
    }

    /**
     * Get the quote page title
     */
    async getQuotePageTitle(): Promise<string> {
        return await this.getTitle();
    }

    /**
     * Check if quote form is present
     */
    async isQuoteFormVisible(): Promise<boolean> {
        return await this.isElementVisible(this.quoteForm);
    }

    /**
     * Get all form fields on the quote page
     */
    async getFormFields(): Promise<string[]> {
        const fields = await this.quoteForm.locator('input, textarea, select').all();
        const fieldNames: string[] = [];
        
        for (const field of fields) {
            const name = await field.getAttribute('name') || await field.getAttribute('id') || 'unnamed';
            fieldNames.push(name);
        }
        
        return fieldNames;
    }
}
