import {Page} from 'puppeteer'
import chai from 'chai'
import {getAttribute} from './getAttribute'
import {SelectorNotFound} from '../errors/SelectorNotFound'
import {waitForSelector} from './waitForSelector'

async function expectAttribute(page: Page, selector: string, attribute: string, text: string, timeout: number = 30): Promise<void> {
    try {
        await waitForSelector(page, selector, timeout)
        chai.expect(await getAttribute(page, selector, attribute)).eql(text)
    } catch(error) {
        if (error instanceof SelectorNotFound) {
            throw new SelectorNotFound(`Couldn't find: ${text}. Attribute: ${attribute}. Selector: ${selector}`)
        } else {
            throw error
        }
    }
}
export {expectAttribute}