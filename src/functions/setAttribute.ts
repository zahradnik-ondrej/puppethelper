import {Page} from 'puppeteer'
import {waitForSelector} from './waitForSelector'
import {SelectorNotFound} from '../errors/SelectorNotFound'

async function setAttribute(page: Page, selector: string, attribute: string, value: string): Promise<void> {
    try {
        await waitForSelector(page, selector)
        await page.$eval(selector, (element: Element, attribute: string, value: string): void => {
            element.setAttribute(attribute, value)
        }, attribute, value)
    } catch(error) {
        if (error instanceof SelectorNotFound) {
            throw new SelectorNotFound(`Couldn't find attribute: ${attribute}. Selector: ${selector}`)
        } else {
            throw error
        }
    }
}

export {setAttribute}