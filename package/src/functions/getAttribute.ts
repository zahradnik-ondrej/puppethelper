import { Page, ElementHandle } from 'puppeteer'
import { SelectorType } from '../types/SelectorType'
import { findElement } from './findElement'
import { AttributeNotFound } from '../errors/AttributeNotFound'

async function getAttribute(
  page: Page,
  selector: string,
  attribute: string,
  type: SelectorType = 'css',
  timeout: number = 30,
): Promise<string> {
  await findElement(page, selector, type, timeout)

  let result: { attr: string | null; error: boolean } | null

  if (type === 'css') {
    result = await page.$eval(
      selector,
      (
        element: Element,
        attribute: string,
      ): { attr: string | null; error: boolean } => {
        const attr: string | null = (element as Element).getAttribute(attribute)
        const error: boolean = attr === null
        return { attr, error }
      },
      attribute,
    )
  } else {
    const [element_handle] = await page.$$('xpath/.' + selector)
    result = await page.evaluate(
      (
        element: Element,
        attribute: string,
      ): { attr: string | null; error: boolean } => {
        const attr: string | null = (element as Element).getAttribute(attribute)
        const error: boolean = attr === null
        return { attr, error }
      },
      element_handle as ElementHandle,
      attribute,
    )
  }

  if (result && result.error) {
    throw new AttributeNotFound(attribute, selector)
  }

  return result!.attr!
}

export { getAttribute }
