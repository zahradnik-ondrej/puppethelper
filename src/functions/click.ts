import { Page, ElementHandle } from 'puppeteer';
import { waitForSelector } from './waitForSelector';

async function click(page: Page, selector: string, type: string = 'css', timeout: number = 30): Promise<void> {
    if (type === 'css') {
        await waitForSelector(page, selector, timeout);
        await page.click(selector);
    } else if (type === 'xpath') {
        const [element] = await page.$x(selector);
        await ((element as any) as ElementHandle).click();
    }
}

export { click };
