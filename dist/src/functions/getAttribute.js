"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttribute = void 0;
const SelectorNotFound_1 = require("../errors/SelectorNotFound");
const waitForSelector_1 = require("./waitForSelector");
async function getAttribute(page, selector, attribute) {
    await (0, waitForSelector_1.waitForSelector)(page, selector);
    try {
        return await page.$eval(selector, (element, attribute) => {
            return element.getAttribute(attribute);
        }, attribute);
    }
    catch (e) {
        throw new SelectorNotFound_1.SelectorNotFound(`Couldn't find attribute: ${attribute}. Selector: ${selector}`);
    }
}
exports.getAttribute = getAttribute;
