import { Page } from 'puppeteer'
import { SelectorType } from '../types/SelectorType'
import { findElement } from './findElement'

async function type(
  page: Page,
  selector: string,
  text: string,
  type: SelectorType = 'css',
  timeout: number = 30,
): Promise<void> {
  await findElement(page, selector, type, timeout)
  await page.type(selector, text)
}

export { type }
