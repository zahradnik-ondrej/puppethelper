import { Page } from 'puppeteer';
declare function expectText(page: Page, selector: string, text: string): Promise<void>;
export { expectText };
