"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const derivationCode_1 = require("./../derivationCode/derivationCode");
const moment_1 = __importDefault(require("moment"));
const sdr33Tools_1 = require("./../sdr33Tools");
/**
 * SDR33 (Sokkia format)
 *  Header class
 */
class Header {
    //constructor
    constructor() {
        this._typeCode = '00';
        this._derivationCode = derivationCode_1.derivationCode.NotMeasured;
        this._version = 'SDR33 V04-04.02';
        this._SerialNumber = '';
        this.datalength = 46; //length in bytes
        this._DateTime = moment_1.default().toISOString();
        this._settings = { angleUnit: 2, distanceUnit: 1, pressureUnit: 3, tempUnit: 1, coordPromptOption: 1, AnglesLeftRightOption: 1 };
    }
    getVersionBytes() {
        let len = 16;
        let Res = this._version;
        return sdr33Tools_1.fillUp(Res, len);
    }
    getSerialNumberBytes() {
        let len = 4;
        let Res = this._SerialNumber;
        return sdr33Tools_1.fillUp(Res, len);
    }
    getDateTimeBytes() {
        let len = 16;
        let Res = this._DateTime;
        return sdr33Tools_1.fillUp(Res, len);
    }
    getSettings() {
        let len = 6;
        let Res = this._settings.angleUnit + '' + this._settings.distanceUnit + '' + this._settings.pressureUnit + '' + this._settings.tempUnit + '' + this._settings.coordPromptOption + '' + this._settings.AnglesLeftRightOption;
        return sdr33Tools_1.fillUp(Res, len);
    }
    getMessage() {
        let m = '';
        m += this._typeCode;
        m += this._derivationCode;
        m += this.getVersionBytes();
        m += this.getSerialNumberBytes();
        m += this.getDateTimeBytes();
        m += this.getSettings();
        return m;
    }
}
exports.Header = Header;
//# sourceMappingURL=header.js.map