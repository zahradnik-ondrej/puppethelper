import {Page} from 'puppeteer'
import {SelectorNotFound} from '../errors/SelectorNotFound'

async function waitForSelector(page: Page, selector: string, timeout: number = 60): Promise<void> {
  timeout *= 1000
  const TIMEOUT_STEP: number = 500
  while(timeout > 0) {
    try {
      await page.waitForSelector(selector, {timeout: TIMEOUT_STEP})
    } catch(e) {
      timeout -= TIMEOUT_STEP
      if (timeout <= 0) {
        throw new SelectorNotFound(`Couldn't find selector: ${selector}`)
      }
    }
    break
  }
}

export {waitForSelector}