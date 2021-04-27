"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fillUp = void 0;
function fillUp(inP, len) {
    let Res = inP;
    if (Res.length > len) {
        Res = Res.substring(0, len);
    }
    else if (Res.length < len) {
        while (Res.length < len) {
            Res += ' ';
        }
    }
    return Res;
}
exports.fillUp = fillUp;
//# sourceMappingURL=sdr33Tools.js.map