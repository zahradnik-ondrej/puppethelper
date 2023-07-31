"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttribute = void 0;
const SelectorNotFound_1 = require("../errors/SelectorNotFound");
async function getAttribute(page, selector, attribute) {
    try {
        await page.waitForSelector(selector);
        return await page.$eval(selector, (element, attribute) => {
            return element.getAttribute(attribute);
        }, attribute);
    }
    catch (e) {
        throw new SelectorNotFound_1.SelectorNotFound(`Couldn't find attribute: ${attribute}. Selector: ${selector}`);
    }
}
exports.getAttribute = getAttribute;
