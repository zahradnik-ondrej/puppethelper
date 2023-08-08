"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForSelector = void 0;
const SelectorNotFound_1 = require("../errors/SelectorNotFound");
async function waitForSelector(page, selector, timeout = 60) {
    try {
        await page.waitForSelector(selector, { timeout: timeout * 1000 });
    }
    catch (e) {
        throw new SelectorNotFound_1.SelectorNotFound(`Couldn't find selector: ${selector}`);
    }
}
exports.waitForSelector = waitForSelector;
