import {Page} from 'puppeteer'
import chai from 'chai'
import {getText} from './getText'
import {SelectorNotFound} from '../errors/SelectorNotFound'
import {waitForSelector} from './waitForSelector'

async function expectText(page: Page, selector: string, text: string, type: string = 'css', timeout: number = 30): Promise<void> {
  try {
    await waitForSelector(page, selector, type, timeout)
    chai.expect(await getText(page, selector)).eql(text)
  } catch(error) {
    if (error instanceof SelectorNotFound) {
      throw new SelectorNotFound(`Couldn't find: ${text}. Selector: ${selector}`)
    } else {
      throw error
    }
  }
}

export {expectText}