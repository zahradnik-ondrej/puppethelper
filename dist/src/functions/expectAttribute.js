"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expectAttribute = void 0;
const chai_1 = __importDefault(require("chai"));
const getAttribute_1 = require("./getAttribute");
const SelectorNotFound_1 = require("../errors/SelectorNotFound");
const waitForSelector_1 = require("./waitForSelector");
async function expectAttribute(page, selector, attribute, text, timeout = 30) {
    try {
        await (0, waitForSelector_1.waitForSelector)(page, selector, timeout);
        chai_1.default.expect(await (0, getAttribute_1.getAttribute)(page, selector, attribute)).eql(text);
    }
    catch (error) {
        if (error instanceof SelectorNotFound_1.SelectorNotFound) {
            throw new SelectorNotFound_1.SelectorNotFound(`Couldn't find: ${text}. Attribute: ${attribute}. Selector: ${selector}`);
        }
        else {
            throw error;
        }
    }
}
exports.expectAttribute = expectAttribute;
