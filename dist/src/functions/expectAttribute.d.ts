import { Page } from 'puppeteer';
declare function expectAttribute(page: Page, selector: string, attribute: string, text: string): Promise<void>;
export { expectAttribute };
