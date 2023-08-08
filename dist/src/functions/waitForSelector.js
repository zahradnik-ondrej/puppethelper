"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForSelector = void 0;
async function waitForSelector(page, selector, timeout = 5) {
    /*
    try {
      await page.waitForSelector(selector)
    } catch(e) {
      throw new SelectorNotFound(`Couldn't find selector: ${selector}`)
    }
    */
    /*
    timeout *= 1000
    const TIMEOUT_STEP: number = 500
    while(timeout > 0) {
      try {
        await page.waitForSelector(selector, {timeout: TIMEOUT_STEP})
      } catch(e) {
        timeout -= TIMEOUT_STEP
        if (timeout <= 0) {
          throw new SelectorNotFound(`Couldn't find selector: ${selector}`)
        }
      }
    }
    */
}
exports.waitForSelector = waitForSelector;
