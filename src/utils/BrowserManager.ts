import { Browser, BrowserContext, Page, chromium } from '@playwright/test';

export class BrowserManager {
    private static browser: Browser;
    private static context: BrowserContext;
    private static page: Page;

    /**
     * Initialize browser instance
     */
    static async initializeBrowser(): Promise<void> {
        if (!this.browser) {
            this.browser = await chromium.launch({ 
                headless: false,
                slowMo: 100 // Add slight delay for better visibility
            });
        }
    }

    /**
     * Create new browser context
     */
    static async createContext(): Promise<BrowserContext> {
        await this.initializeBrowser();
        this.context = await this.browser.newContext({
            viewport: { width: 1280, height: 720 },
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        });
        return this.context;
    }

    /**
     * Create new page
     */
    static async createPage(): Promise<Page> {
        if (!this.context) {
            await this.createContext();
        }
        this.page = await this.context.newPage();
        return this.page;
    }

    /**
     * Get current page
     */
    static getCurrentPage(): Page {
        if (!this.page) {
            throw new Error('No page available. Please create a page first.');
        }
        return this.page;
    }

    /**
     * Close current page
     */
    static async closePage(): Promise<void> {
        if (this.page) {
            await this.page.close();
            this.page = null as any;
        }
    }

    /**
     * Close browser context
     */
    static async closeContext(): Promise<void> {
        if (this.context) {
            await this.context.close();
            this.context = null as any;
        }
    }

    /**
     * Close browser and cleanup
     */
    static async closeBrowser(): Promise<void> {
        await this.closePage();
        await this.closeContext();
        
        if (this.browser) {
            await this.browser.close();
            this.browser = null as any;
        }
    }

    /**
     * Take screenshot
     */
    static async takeScreenshot(name: string): Promise<void> {
        if (this.page) {
            await this.page.screenshot({ 
                path: `reports/screenshots/${name}-${Date.now()}.png`,
                fullPage: true 
            });
        }
    }
}
