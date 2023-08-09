import { Page } from 'puppeteer';
declare function expectText(page: Page, selector: string, text: string, timeout?: number): Promise<void>;
export { expectText };
