"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearManual = void 0;
const waitForSelector_1 = require("./waitForSelector");
const getAttribute_1 = require("./getAttribute");
async function clearManual(page, selector, attribute = 'value') {
    await (0, waitForSelector_1.waitForSelector)(page, selector);
    await page.type(selector, 'x');
    // @ts-ignore
    const value_len = (await (0, getAttribute_1.getAttribute)(page, selector, attribute)).length;
    for (let char = value_len; char >= 0; char--)
        await page.keyboard.press('Backspace');
}
exports.clearManual = clearManual;
