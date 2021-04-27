import { derivationCode } from './../derivationCode/derivationCode'
import moment from 'moment'
import { fillUp } from './../sdr33Tools';

/**
 * SDR33 (Sokkia format) 
 *  Header class 
 */
export class Header {

  private _typeCode: string = '00';
  private _derivationCode: derivationCode = derivationCode.NotMeasured;
  private _version: string = 'SDR33 V04-04.02';
  private _SerialNumber: string = '';
  private _DateTime: string;
  private _settings: { angleUnit: number, distanceUnit: number, pressureUnit: number, tempUnit: number, coordPromptOption: number, AnglesLeftRightOption: number };

  private datalength: number = 46      //length in bytes

  //constructor
  constructor() {
    this._DateTime = moment().toISOString();
    this._settings = { angleUnit: 2, distanceUnit: 1, pressureUnit: 3, tempUnit: 1, coordPromptOption: 1, AnglesLeftRightOption: 1 };

  }

  private getVersionBytes(): string {
    let len = 16;
    let Res = this._version;
    return fillUp(Res, len);
  }

  private getSerialNumberBytes(): string {
    let len = 4;
    let Res = this._SerialNumber;
    return fillUp(Res, len);
  }

  private getDateTimeBytes(): string {
    let len = 16;
    let Res = this._DateTime;
    return fillUp(Res, len);
  }

  private getSettings(): string {
    let len = 6;
    let Res = this._settings.angleUnit + '' + this._settings.distanceUnit + '' + this._settings.pressureUnit + '' + this._settings.tempUnit + '' + this._settings.coordPromptOption + '' + this._settings.AnglesLeftRightOption;
    return fillUp(Res, len);
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