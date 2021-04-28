import sdr33 from './index'
import { expect } from 'chai';

/*
let testExport = new sdr33.Sdr33Export('TestJobNameWhichIsTooLong')

let pointArray = [];

for (let index = 0; index < 100; index++) {
  const element = new sdr33.Coordinate(String(index), Math.random() * 100, Math.random() * 100, Math.random() * 10, 'Description of Point ' + index);
  testExport.addCoordinate(element);
}

console.log(testExport.getMessage());
*/


let E = sdr33.Sdr33Export.fromGeoJson('./test.geojson');
console.log(E.getMessage());





