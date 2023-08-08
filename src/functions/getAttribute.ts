import {Page} from 'puppeteer'
import {SelectorNotFound} from '../errors/SelectorNotFound'
import {waitForSelector} from "./waitForSelector"

async function getAttribute(page: Page, selector: string, attribute: string): Promise <string | null> {
    await waitForSelector(page, selector)

    try {
        return await page.$eval(selector, (element: Element, attribute: string) => {
            return element.getAttribute(attribute)
        }, attribute)
    } catch (e) {
        throw new SelectorNotFound(`Couldn't find attribute: ${attribute}. Selector: ${selector}`)
    }
}

export {getAttribute}