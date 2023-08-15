import {Page} from 'puppeteer'
import {waitForSelector} from './waitForSelector'
import {getAttribute} from './getAttribute'

async function clearManual(page: Page, selector: string, attribute: string = 'value'): Promise<void> {
    await waitForSelector(page, selector)

    await page.type(selector, 'x')
    // @ts-ignore
    const value_len = (await getAttribute(page, selector, attribute)).length
    for (let char = value_len; char >= 0; char--) await page.keyboard.press('Backspace')
}

export {clearManual}