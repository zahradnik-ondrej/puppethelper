"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomInt = void 0;
function randomInt(min = 0, max = 9) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
exports.randomInt = randomInt;
