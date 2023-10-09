import { Page } from 'puppeteer';
declare function expectText(page: Page, selector: string, text: string, type?: string, timeout?: number): Promise<void>;
export { expectText };
