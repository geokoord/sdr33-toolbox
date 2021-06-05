import { expect } from 'chai';
import { Job } from './job';


let C = new Job('MyTestJobWithLongName');

describe('JobIdnetifier', () => {

  describe('Message', () => {

    describe('Length of message', () => {

      let M = C.getMessage();

      it('Length of message expect to be 26', function () {
        expect(M).to.be.lengthOf(26);
      });
    });
  });

});