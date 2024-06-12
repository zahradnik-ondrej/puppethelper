import { Page, ElementHandle } from 'puppeteer'
import { SelectorType } from '../types/SelectorType'
import { findElement } from './findElement'

async function getText(
  page: Page,
  selector: string,
  type: SelectorType = 'css',
  timeout: number = 30,
): Promise<string> {
  await findElement(page, selector, type, timeout)
  let textContent: string
  if (type === 'css') {
    textContent = await page.$eval(
      selector,
      (element: Element): string => (element as Element).textContent || '',
    )
  } else {
    const [element_handle] = await page.$$('xpath/.' + selector)
    textContent = await page.evaluate(
      (element: Element): string => (element as Element).textContent || '',
      element_handle as ElementHandle,
    )
  }
  return textContent.trim().replace(/\u00A0/g, ' ')
}

export { getText }
