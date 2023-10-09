"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
const waitForSelector_1 = require("./waitForSelector");
async function type(page, selector, text, type = 'css', timeout = 30) {
    await (0, waitForSelector_1.waitForSelector)(page, selector, type, timeout);
    await page.type(selector, text);
}
exports.type = type;
