"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = void 0;
const waitForSelector_1 = require("./waitForSelector");
async function clear(page, selector) {
    await (0, waitForSelector_1.waitForSelector)(page, selector);
    await page.evaluate((selector) => {
        const element = document.querySelector(selector);
        if (element) {
            element.value = '';
        }
    }, selector);
}
exports.clear = clear;
