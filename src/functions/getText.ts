import {Page} from 'puppeteer'
import {SelectorNotFound} from "../errors/SelectorNotFound";

async function getText(page: Page, selector: string): Promise<string> {
  try {
    return page.$eval(selector, (element: Element) => (element.textContent || '').trim())
  } catch (e) {
    throw new SelectorNotFound(`Couldn't find selector: ${selector}.`)
  }
}

export {getText}