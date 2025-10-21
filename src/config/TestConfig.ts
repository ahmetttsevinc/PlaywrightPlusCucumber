export interface TestConfig {
    baseUrl: string;
    timeout: number;
    headless: boolean;
    slowMo: number;
    viewport: {
        width: number;
        height: number;
    };
    retries: number;
}

export const testConfig: TestConfig = {
    baseUrl: 'https://www.intradyn.com/',
    timeout: 30000,
    headless: false,
    slowMo: 100,
    viewport: {
        width: 1280,
        height: 720
    },
    retries: 2
};

export const testData = {
    homePage: {
        title: 'Intradyn',
        expectedQuoteButtonText: 'Request a Quote'
    },
    quotePage: {
        expectedText: 'Request a Custom Quote'
    }
};
