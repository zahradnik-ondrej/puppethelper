"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getText = void 0;
const SelectorNotFound_1 = require("../errors/SelectorNotFound");
async function getText(page, selector) {
    try {
        return page.$eval(selector, (element) => (element.textContent || '').trim());
    }
    catch (e) {
        throw new SelectorNotFound_1.SelectorNotFound(`Couldn't find selector: ${selector}.`);
    }
}
exports.getText = getText;
