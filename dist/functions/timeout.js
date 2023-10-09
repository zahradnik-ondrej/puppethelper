"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeout = void 0;
async function timeout(seconds = 5) {
    const milliseconds = seconds * 1000;
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}
exports.timeout = timeout;
