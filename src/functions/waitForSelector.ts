import { Page } from 'puppeteer';
import { CustomError } from '../errors/CustomError';
import { SelectorNotFound } from '../errors/SelectorNotFound';

async function waitForSelector(page: Page, selector: string, type: string = 'css', timeout: number = 30): Promise<void> {
  timeout *= 1000;
  const TIMEOUT_STEP: number = 500;

  while (timeout > 0) {
    try {
      if (type === 'css') {
        await page.waitForSelector(selector, { timeout: TIMEOUT_STEP });
      } else if (type === 'xpath') {
        await page.waitForXPath(selector, { timeout: TIMEOUT_STEP });
      } else {
        throw new CustomError(`Invalid selector type: ${type}. Use 'css' or 'xpath'.`);
      }
      break;
    } catch (e) {
      timeout -= TIMEOUT_STEP;
      if (timeout <= 0) {
        throw new SelectorNotFound(`Couldn't find selector: ${selector}`);
      }
    }
  }
}

export { waitForSelector };
