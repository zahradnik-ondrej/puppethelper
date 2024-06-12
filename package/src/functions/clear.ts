import { Page } from 'puppeteer'
import { SelectorType } from '../types/SelectorType'
import { findElement } from './findElement'

async function clear(
  page: Page,
  selector: string,
  type: SelectorType = 'css',
  timeout: number = 30,
): Promise<void> {
  await findElement(page, selector, type, timeout)
  if (type === 'css') {
    await page.evaluate((selector: string): void => {
      const element: HTMLInputElement | null = document.querySelector(
        selector,
      ) as HTMLInputElement | null
      if (element) {
        element.value = ''
      }
    }, selector)
  } else {
    await page.evaluate((selector: string): void => {
      const element: HTMLInputElement | null = document.evaluate(
        selector,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null,
      ).singleNodeValue as HTMLInputElement | null
      if (element) {
        element.value = ''
      }
    }, selector)
  }

  const attribute_value: string = await page.evaluate(
    (selector: string): string => {
      const element: HTMLInputElement = document.querySelector(
        selector,
      ) as HTMLInputElement
      return element ? element.value : ''
    },
    selector,
  )

  if (attribute_value !== '') {
    await page.type(selector, 'x')
    const attribute_value_len: number = attribute_value.length + 1
    for (let char: number = attribute_value_len; char >= 0; char--) {
      await page.keyboard.press('Backspace')
    }
  }
}

export { clear }
