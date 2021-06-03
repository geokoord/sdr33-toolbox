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
//console.log(E.getMessage());

describe('Sdr33Export Class', () => {

  describe('Check if SDR33Export object has methods', () => {
    it('Method addCoordinate()', function () {
      expect(E).has.property('addCoordinate')
    });

    it('Method getMessage()', function () {
      expect(E).has.property('getMessage')
    });
  });

  describe('Check if SDR33Export class has static methods', () => {

    it('Static method fromGeoJson()', function () {
      expect(sdr33.Sdr33Export).to.have.property('fromGeoJson')
    });
  });

});





