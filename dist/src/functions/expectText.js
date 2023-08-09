"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expectText = void 0;
const chai_1 = __importDefault(require("chai"));
const getText_1 = require("./getText");
const SelectorNotFound_1 = require("../errors/SelectorNotFound");
const waitForSelector_1 = require("./waitForSelector");
async function expectText(page, selector, text, timeout = 30) {
    try {
        await (0, waitForSelector_1.waitForSelector)(page, selector, timeout);
        chai_1.default.expect(await (0, getText_1.getText)(page, selector)).eql(text);
    }
    catch (error) {
        if (error instanceof SelectorNotFound_1.SelectorNotFound) {
            throw new SelectorNotFound_1.SelectorNotFound(`Couldn't find: ${text}. Selector: ${selector}`);
        }
        else {
            throw error;
        }
    }
}
exports.expectText = expectText;
