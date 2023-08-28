"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForSelector = void 0;
const CustomError_1 = require("../errors/CustomError");
const SelectorNotFound_1 = require("../errors/SelectorNotFound");
async function waitForSelector(page, selector, type = 'css', timeout = 30) {
    timeout *= 1000;
    const TIMEOUT_STEP = 500;
    while (timeout > 0) {
        try {
            if (type === 'css') {
                await page.waitForSelector(selector, { timeout: TIMEOUT_STEP });
            }
            else if (type === 'xpath') {
                await page.waitForXPath(selector, { timeout: TIMEOUT_STEP });
            }
            else {
                throw new CustomError_1.CustomError(`Invalid selector type: ${type}. Use 'css' or 'xpath'.`);
            }
            break;
        }
        catch (e) {
            timeout -= TIMEOUT_STEP;
            if (timeout <= 0) {
                throw new SelectorNotFound_1.SelectorNotFound(`Couldn't find selector: ${selector}`);
            }
        }
    }
}
exports.waitForSelector = waitForSelector;
