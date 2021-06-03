"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const chai_1 = require("chai");
/*
let testExport = new sdr33.Sdr33Export('TestJobNameWhichIsTooLong')

let pointArray = [];

for (let index = 0; index < 100; index++) {
  const element = new sdr33.Coordinate(String(index), Math.random() * 100, Math.random() * 100, Math.random() * 10, 'Description of Point ' + index);
  testExport.addCoordinate(element);
}

console.log(testExport.getMessage());
*/
let E = index_1.default.Sdr33Export.fromGeoJson('./test.geojson');
//console.log(E.getMessage());
describe('Sdr33Export Class', () => {
    describe('Check if SDR33Export object has methods', () => {
        it('Method addCoordinate()', function () {
            chai_1.expect(E).has.property('addCoordinate');
        });
        it('Method getMessage()', function () {
            chai_1.expect(E).has.property('getMessage');
        });
    });
    describe('Check if SDR33Export class has static methods', () => {
        it('Static method fromGeoJson()', function () {
            chai_1.expect(index_1.default.Sdr33Export).to.have.property('fromGeoJson');
        });
    });
});
//# sourceMappingURL=e2e.test.js.map