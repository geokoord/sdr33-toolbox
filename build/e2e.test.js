"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
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
console.log(E.getMessage());
//# sourceMappingURL=e2e.test.js.map