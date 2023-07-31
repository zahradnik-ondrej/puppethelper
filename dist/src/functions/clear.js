"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = void 0;
async function clear(page, selector) {
    await page.evaluate((selector) => {
        const element = document.querySelector(selector);
        if (element) {
            element.value = '';
        }
    }, selector);
}
exports.clear = clear;
