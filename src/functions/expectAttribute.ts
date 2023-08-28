import {Page} from 'puppeteer'
import chai from 'chai'
import {getAttribute} from './getAttribute'
import {SelectorNotFound} from '../errors/SelectorNotFound'
import {waitForSelector} from './waitForSelector'

async function expectAttribute(page: Page, selector: string, attribute: string, value: string, type: string = 'css', timeout: number = 30): Promise<void> {
    try {
        await waitForSelector(page, selector, type, timeout)
        chai.expect(await getAttribute(page, selector, attribute)).eql(value)
    } catch(error) {
        if (error instanceof SelectorNotFound) {
            throw new SelectorNotFound(`Couldn't find: ${value}. Attribute: ${attribute}. Selector: ${selector}`)
        } else {
            throw error
        }
    }
}
export {expectAttribute}