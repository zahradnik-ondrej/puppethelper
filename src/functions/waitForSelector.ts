import {Page} from 'puppeteer'
import {SelectorNotFound} from '../errors/SelectorNotFound'

async function waitForSelector(page: Page, selector: string): Promise<void> {
  try {
    await page.waitForSelector(selector)
  } catch(e) {
    throw new SelectorNotFound(`Couldn't find selector: ${selector}`)
  }
}

export {waitForSelector}