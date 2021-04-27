"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const header_1 = require("./header");
let C = new header_1.Header();
console.log(C.getMessage());
describe('Header', () => {
    describe('Message', () => {
        describe('Length of message', () => {
            let M = C.getMessage();
            it('Length of message expect to be 46', function () {
                chai_1.expect(M).to.be.lengthOf(46);
            });
        });
    });
});
//# sourceMappingURL=header.test.js.map