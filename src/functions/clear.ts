import {Page} from 'puppeteer'

async function clear(page: Page, selector: string): Promise<void> {
  await page.evaluate((selector: string) => {
    const element: HTMLInputElement | null = document.querySelector(selector) as HTMLInputElement | null
    if (element) {
      element.value = ''
    }
  }, selector)
}

export {clear}