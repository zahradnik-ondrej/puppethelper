import {Page} from 'puppeteer'
import chai from 'chai'
import {SelectorNotFound} from '../errors/SelectorNotFound'

async function expectText(page: Page, selector: string, text: string): Promise<void> {
  try {
    chai.expect(await getText(page, selector)).eql(text)
  } catch(error) {
    if (error instanceof SelectorNotFound) {
      throw new SelectorNotFound(`Couldn't find: ${text}. Selector: ${selector}`)
    } else {
      throw error
    }
  }
}
