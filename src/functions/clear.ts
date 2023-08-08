import {Page} from 'puppeteer'
import {waitForSelector} from "./waitForSelector"

async function clear(page: Page, selector: string): Promise<void> {
  await waitForSelector(page, selector)

  await page.evaluate((selector: string) => {
    const element: HTMLInputElement | null = document.querySelector(selector) as HTMLInputElement | null
    if (element) {
      element.value = ''
    }
  }, selector)
}

export {clear}