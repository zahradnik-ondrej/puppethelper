"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForSelector = void 0;
const SelectorNotFound_1 = require("../errors/SelectorNotFound");
async function waitForSelector(page, selector, timeout = 60) {
    timeout *= 1000;
    const TIMEOUT_STEP = 500;
    while (timeout > 0) {
        try {
            await page.waitForSelector(selector, { timeout: TIMEOUT_STEP });
        }
        catch (e) {
            timeout -= TIMEOUT_STEP;
            if (timeout <= 0) {
                throw new SelectorNotFound_1.SelectorNotFound(`Couldn't find selector: ${selector}`);
            }
        }
        break;
    }
}
exports.waitForSelector = waitForSelector;
