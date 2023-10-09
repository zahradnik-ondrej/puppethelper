import { Page } from 'puppeteer';
declare function getText(page: Page, selector: string): Promise<string>;
export { getText };
