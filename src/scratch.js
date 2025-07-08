"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function main(val = 0) {
    if (val > 9) {
        return "equal to or greater than 10";
    }
    return "less than 10";
}
exports.default = main;
