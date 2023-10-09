"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getText = void 0;
const SelectorNotFound_1 = require("../errors/SelectorNotFound");
async function getText(page, selector) {
    try {
        return (await page.$eval(selector, (element) => (element.textContent || ''))).trim().replace(/\u00A0/g, ' ');
    }
    catch (e) {
        throw new SelectorNotFound_1.SelectorNotFound(`Couldn't find selector: ${selector}.`);
    }
}
exports.getText = getText;
