import { Page } from 'puppeteer';
declare function waitForSelector(page: Page, selector: string): Promise<void>;
export { waitForSelector };
