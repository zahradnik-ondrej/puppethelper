import { Page, ElementHandle } from 'puppeteer'
import { SelectorType } from '../types/SelectorType'
import { findElement } from './findElement'

async function click(
  page: Page,
  selector: string,
  type: SelectorType = 'css',
  timeout: number = 30,
): Promise<void> {
  await findElement(page, selector, type, timeout)
  if (type === 'css') {
    await page.click(selector)
  } else {
    const [element] = await page.$$('xpath/.' + selector)
    await (element as ElementHandle).click()
  }
}

export { click }
