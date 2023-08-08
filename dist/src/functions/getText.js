"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getText = void 0;
async function getText(page, selector) {
    return page.$eval(selector, (element) => (element.textContent || '').trim());
}
exports.getText = getText;
