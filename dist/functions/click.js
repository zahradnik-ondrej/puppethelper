"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.click = void 0;
const waitForSelector_1 = require("./waitForSelector");
const CustomError_1 = require("../errors/CustomError");
async function click(page, selector, type = 'css', timeout = 30) {
    if (type === 'css') {
        await (0, waitForSelector_1.waitForSelector)(page, selector, 'css', timeout);
        await page.click(selector);
    }
    else if (type === 'xpath') {
        await (0, waitForSelector_1.waitForSelector)(page, selector, 'xpath', timeout);
        const [element] = await page.$x(selector);
        await element.click();
    }
    else {
        throw new CustomError_1.CustomError(`Invalid selector type: ${type}. Use 'css' or 'xpath'.`);
    }
}
exports.click = click;
