"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectorNotFound = void 0;
class SelectorNotFound extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = this.constructor.name;
    }
}
exports.SelectorNotFound = SelectorNotFound;
