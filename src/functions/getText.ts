import {Page} from 'puppeteer'

async function getText(page: Page, selector: string): Promise<string> {
  return page.$eval(selector, (element: Element) => (element.textContent || '').trim())
}

export {getText}