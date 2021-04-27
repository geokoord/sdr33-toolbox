import { expect } from 'chai';
import { Header } from './header';


let C = new Header();

console.log(C.getMessage())

describe('Header', () => {

  describe('Message', () => {

    describe('Length of message', () => {

      let M = C.getMessage();

      it('Length of message expect to be 46', function () {
        expect(M).to.be.lengthOf(46);
      });
    });
  });

});