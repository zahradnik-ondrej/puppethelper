import { Page } from 'puppeteer';
declare function expectAttribute(page: Page, selector: string, attribute: string, value: string, timeout?: number): Promise<void>;
export { expectAttribute };
