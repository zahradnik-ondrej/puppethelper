import {Page} from 'puppeteer'
import {SelectorNotFound} from '../errors/SelectorNotFound'

async function waitForSelector(page: Page, selector: string, timeout: number = 60): Promise<void> {
  try {
    await page.waitForSelector(selector, { timeout: timeout * 1000 });
  } catch (e) {
    throw new SelectorNotFound(`Couldn't find selector: ${selector}`);
  }
}

export {waitForSelector}