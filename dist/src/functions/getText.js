"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getText = void 0;
const SelectorNotFound_1 = require("../errors/SelectorNotFound");
async function getText(page, selector) {
    try {
        await page.waitForSelector(selector);
    }
    catch (e) {
        throw new SelectorNotFound_1.SelectorNotFound(`Couldn't find selector: ${selector}`);
    }
    return page.$eval(selector, (element) => (element.textContent || '').trim());
}
exports.getText = getText;
