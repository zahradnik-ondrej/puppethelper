import { Page } from 'puppeteer';
declare function type(page: Page, selector: string, text: string, type?: string, timeout?: number): Promise<void>;
export { type };
