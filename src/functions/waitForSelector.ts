import {Page} from 'puppeteer'
import {SelectorNotFound} from '../errors/SelectorNotFound'

async function waitForSelector(page: Page, selector: string, timeout: number = 5): Promise<void> {
  /*
  try {
    await page.waitForSelector(selector)
  } catch(e) {
    throw new SelectorNotFound(`Couldn't find selector: ${selector}`)
  }
  */

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
  }
}

export {waitForSelector}