import {Page} from 'puppeteer'
import {getAttribute} from './getAttribute'
import {SelectorNotFound} from '../errors/SelectorNotFound'

async function expectAttribute(page: Page, selector: string, attribute: string, text: string): Promise<void> {
    try {
        await getAttribute(page, selector, attribute)
    } catch(e) {
        throw new SelectorNotFound(`Couldn't find: ${text}. Attribute: ${attribute}. Selector: ${selector}`)
    }
}
export {expectAttribute}