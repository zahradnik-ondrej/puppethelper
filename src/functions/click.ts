import {Page} from 'puppeteer'
import {waitForSelector} from './waitForSelector'

async function click(page: Page, selector: string, timeout: number = 30): Promise<void> {
    await waitForSelector(page, selector, timeout)
    await page.click(selector)
}

export {click}