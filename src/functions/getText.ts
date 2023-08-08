import {Page} from 'puppeteer'
import {waitForSelector} from "./waitForSelector"

async function getText(page: Page, selector: string): Promise<string> {
  await waitForSelector(page, selector)
  return page.$eval(selector, (element: Element) => (element.textContent || '').trim())
}

export {getText}