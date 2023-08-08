"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getText = void 0;
const waitForSelector_1 = require("./waitForSelector");
async function getText(page, selector) {
    await (0, waitForSelector_1.waitForSelector)(page, selector);
    return page.$eval(selector, (element) => (element.textContent || '').trim());
}
exports.getText = getText;
