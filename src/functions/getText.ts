import {Page} from 'puppeteer'
import {SelectorNotFound} from '../errors/SelectorNotFound'

async function getText(page: Page, selector: string): Promise<string> {
  try {
    await page.waitForSelector(selector)
  } catch(e) {
    throw new SelectorNotFound(`Couldn't find selector: ${selector}`)
  }
  return page.$eval(selector, (element: Element) => (element.textContent || '').trim())
}

export {getText}