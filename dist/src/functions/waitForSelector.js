"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForSelector = void 0;
const SelectorNotFound_1 = require("../errors/SelectorNotFound");
const TIMEOUT_STEP_1 = require("../constants/TIMEOUT_STEP");
async function waitForSelector(page, selector, timeout = 60) {
    timeout *= 1000;
    while (timeout > 0) {
        try {
            await page.waitForSelector(selector, { timeout: TIMEOUT_STEP_1.TIMEOUT_STEP });
            break;
        }
        catch (e) {
            // this stays empty
        }
        timeout -= TIMEOUT_STEP_1.TIMEOUT_STEP;
        if (timeout <= 0) {
            throw new SelectorNotFound_1.SelectorNotFound(`Couldn't find selector: ${selector}`);
        }
    }
}
exports.waitForSelector = waitForSelector;
