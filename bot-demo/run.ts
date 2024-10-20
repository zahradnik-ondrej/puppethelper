import puppeteer, { Browser, Page } from 'puppeteer'

import * as ph from '../package/index'
;(async (): Promise<void> => {
  ph.browser_opts.headless = false
  ph.browser_opts.slowMo = 100
  const browser: Browser = await puppeteer.launch(ph.browser_opts)
  const page: Page = await browser.newPage()
  page.setDefaultTimeout(ph.page_opts.default_timeout)
  await page.goto(`http://0.0.0.0:8000/`)
  await ph.type(page, 'input', 'zahradnik-ondrej/puppethelper')
  await ph.click(page, '//*[text()="Search"]', 'xpath')
  await ph.click(page, '//*[@href="/zahradnik-ondrej/puppethelper"]', 'xpath')
  await ph.timeout()
  await browser.close()
})()
