import { expect } from 'chai';
import { Coordinate } from './coordinate';


let C = new Coordinate('Testpunkt', 128.25668999666333555888, 0, 0, 'Description');


describe('Coordinate', () => {

  describe('Length of Values', () => {

    describe('Length of short strings', () => {
      let C = new Coordinate('Testpunkt', 0.01, 0, 0, 'Description');
      let NByte = C.getNorthingBytes();

      it('Length of "' + NByte.split(' ').join('*') + '" (North Value) expect to be 16', function () {
        expect(NByte).to.be.lengthOf(16);
      });
    });

    describe('Length of long strings', () => {
      let C = new Coordinate('Testpunkt', 99.987654321987654321, 0, 0, 'Description');
      let NByte = C.getNorthingBytes();

      it('Length of "' + NByte.split(' ').join('*') + '" (North Value) expect to be 16', function () {
        expect(NByte).to.be.lengthOf(16);
      });
    });

    describe('Type of message', () => {

      let M = C.getMessage();

      it('To be of type string', function () {
        expect(M).to.be.a("String");
      });
    });

    let C2 = new Coordinate('Testpunktwithtoolongpouintname', 0.00000112423534564564576567, -18.345676354, 9999999999999999999999999999999, 'Description with too long desc data of type string');
    describe('Length of short strings', () => {

      let M = C2.getMessage();

      it('Length of message expect to be 84', function () {
        expect(M).to.be.lengthOf(84);
      });


    });

  })





});