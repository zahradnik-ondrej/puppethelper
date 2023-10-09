import { Page } from 'puppeteer';
declare function clearManual(page: Page, selector: string, attribute?: string): Promise<void>;
export { clearManual };
