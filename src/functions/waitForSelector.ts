import {Page} from 'puppeteer'
import {SelectorNotFound} from '../errors/SelectorNotFound'
import {TIMEOUT_STEP} from "../constants/TIMEOUT_STEP";

async function waitForSelector(page: Page, selector: string, timeout: number = 60): Promise<void> {
  timeout *= 1000
  while(timeout > 0) {
    try {
      await page.waitForSelector(selector, {timeout: TIMEOUT_STEP})
      break
    } catch(e) {
      // this stays empty
    }

    timeout -= TIMEOUT_STEP
    if (timeout <= 0) {
      throw new SelectorNotFound(`Couldn't find selector: ${selector}`)
    }
  }
}

export {waitForSelector}