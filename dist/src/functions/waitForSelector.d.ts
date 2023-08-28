import { Page } from 'puppeteer';
declare function waitForSelector(page: Page, selector: string, type?: string, timeout?: number): Promise<void>;
export { waitForSelector };
