"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const job_1 = require("./job");
let C = new job_1.Job('MyTestJobWithLongName');
describe('JobIdnetifier', () => {
    describe('Message', () => {
        describe('Length of message', () => {
            let M = C.getMessage();
            it('Length of message expect to be 26', function () {
                chai_1.expect(M).to.be.lengthOf(26);
            });
        });
    });
});
//# sourceMappingURL=job.test.js.map