"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordinate = void 0;
const derivationCode_1 = require("./../derivationCode/derivationCode");
const sdr33Tools_1 = require("./../sdr33Tools");
/**
 * SDR33 (Sokkia format)
 * Coordinate class for point coodinate objects
 */
class Coordinate {
    //constructor
    constructor(pName, N, E, ele, desc) {
        this._typeCode = '08';
        this._derivationCode = derivationCode_1.derivationCode.KeyboardInput;
        this.datalength = 84; //length in bytes
        this._pointId = pName;
        this._nothing = Number(N.toFixed(4));
        this._easting = Number(E.toFixed(4));
        this._elevation = Number(ele.toFixed(4));
        this._description = desc;
    }
    getPointIdBytes() {
        let len = 16;
        let Res = this._pointId;
        return sdr33Tools_1.fillUp(Res, len);
    }
    getNorthingBytes() {
        let len = 16;
        let Res = this._nothing.toString(10);
        return sdr33Tools_1.fillUp(Res, len);
    }
    getEastingBytes() {
        let len = 16;
        let Res = this._easting.toString(10);
        return sdr33Tools_1.fillUp(Res, len);
    }
    getEelvationBytes() {
        let len = 16;
        let Res = this._elevation.toString(10);
        return sdr33Tools_1.fillUp(Res, len);
    }
    getDescriptionBytes() {
        let len = 16;
        let Res = this._description;
        return sdr33Tools_1.fillUp(Res, len);
    }
    getMessage() {
        let m = '';
        m += this._typeCode;
        m += this._derivationCode;
        m += this.getPointIdBytes();
        m += this.getNorthingBytes();
        m += this.getEastingBytes();
        m += this.getEelvationBytes();
        m += this.getDescriptionBytes();
        return m;
    }
}
exports.Coordinate = Coordinate;
//# sourceMappingURL=coordinate.js.map