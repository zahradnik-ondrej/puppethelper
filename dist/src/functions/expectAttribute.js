"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expectAttribute = void 0;
const getAttribute_1 = require("./getAttribute");
const SelectorNotFound_1 = require("../errors/SelectorNotFound");
async function expectAttribute(page, selector, attribute, text) {
    try {
        await (0, getAttribute_1.getAttribute)(page, selector, attribute);
    }
    catch (e) {
        throw new SelectorNotFound_1.SelectorNotFound(`Couldn't find: ${text}. Attribute: ${attribute}. Selector: ${selector}`);
    }
}
exports.expectAttribute = expectAttribute;
