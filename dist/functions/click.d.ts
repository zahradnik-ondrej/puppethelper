import { Page } from 'puppeteer';
declare function click(page: Page, selector: string, type?: string, timeout?: number): Promise<void>;
export { click };
