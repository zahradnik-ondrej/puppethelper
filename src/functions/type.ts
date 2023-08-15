import {Page} from 'puppeteer'
import {waitForSelector} from './waitForSelector'

async function type(page: Page, selector: string, text: string, timeout: number = 30): Promise<void> {
    await waitForSelector(page, selector, timeout)
    await page.type(selector, text)
}

export {type}