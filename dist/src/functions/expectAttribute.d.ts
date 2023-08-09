import { Page } from 'puppeteer';
declare function expectAttribute(page: Page, selector: string, attribute: string, text: string, timeout?: number): Promise<void>;
export { expectAttribute };
