import { Page } from 'puppeteer';
declare function getAttribute(page: Page, selector: string, attribute: string): Promise<string | null>;
export { getAttribute };
