import {Page} from 'puppeteer'
import {SelectorNotFound} from "../errors/SelectorNotFound";

async function getText(page: Page, selector: string): Promise<string> {
  try {
    return (await page.$eval(selector, (element: Element) => (element.textContent || ''))).trim().replace(/\u00A0/g, ' ')
  } catch (e) {
    throw new SelectorNotFound(`Couldn't find selector: ${selector}.`)
  }
}

export {getText}