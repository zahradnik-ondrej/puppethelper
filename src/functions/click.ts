import { Page, ElementHandle } from 'puppeteer';
import { waitForSelector } from './waitForSelector';
import { CustomError } from '../errors/CustomError';

async function click(page: Page, selector: string, type: string = 'css', timeout: number = 30): Promise<void> {
    if (type === 'css') {
        await waitForSelector(page, selector, 'css', timeout);
        await page.click(selector);
    } else if (type === 'xpath') {
        await waitForSelector(page, selector, 'xpath', timeout);
        const [element] = await page.$x(selector);
        await ((element as any) as ElementHandle).click();
    } else {
        throw new CustomError(`Invalid selector type: ${type}. Use 'css' or 'xpath'.`);
    }
}

export { click };
