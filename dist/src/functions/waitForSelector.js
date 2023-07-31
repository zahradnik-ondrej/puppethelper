"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForSelector = void 0;
const SelectorNotFound_1 = require("../errors/SelectorNotFound");
async function waitForSelector(page, selector) {
    try {
        await page.waitForSelector(selector);
    }
    catch (e) {
        throw new SelectorNotFound_1.SelectorNotFound(`Couldn't find selector: ${selector}`);
    }
}
exports.waitForSelector = waitForSelector;
