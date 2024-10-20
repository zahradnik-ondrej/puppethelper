import { Page } from 'puppeteer'
import { SelectorType } from '../types/SelectorType'
import { ElementNotFound } from '../errors/ElementNotFound'

async function findElement(
  page: Page,
  selector: string,
  type: SelectorType = 'css',
  timeout: number = 30,
): Promise<void> {
  timeout *= 1000
  const TIMEOUT_STEP: number = 500

  while (timeout > 0) {
    try {
      if (type === 'css') {
        await page.waitForSelector(selector, { timeout: TIMEOUT_STEP })
      } else {
        await page.waitForFunction(
          (selector: string) => {
            return !!document.evaluate(
              selector,
              document,
              null,
              XPathResult.FIRST_ORDERED_NODE_TYPE,
              null,
            ).singleNodeValue
          },
          { timeout: TIMEOUT_STEP },
          selector,
        )
      }
      break
    } catch (e) {
      timeout -= TIMEOUT_STEP
      if (timeout <= 0) {
        throw new ElementNotFound(selector)
      }
    }
  }
}

export { findElement }
