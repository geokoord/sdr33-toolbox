
import { format } from 'node:path';
import { derivationCode } from './../derivationCode/derivationCode'
import { fillUp } from './../sdr33Tools';

/**
 * SDR33 (Sokkia format) 
 * Coordinate class for point coodinate objects
 */
export class Coordinate {

  private _typeCode: string = '08';
  private _derivationCode: derivationCode = derivationCode.KeyboardInput;
  private _pointId: string;
  private _nothing: number;
  private _easting: number;
  private _elevation: number;
  private _description: string;

  private datalength: number = 84      //length in bytes

  //constructor
  constructor(pName: string, N: number, E: number, ele: number, desc: string) {
    this._pointId = pName;
    this._nothing = Number(N.toFixed(4));
    this._easting = Number(E.toFixed(4));
    this._elevation = Number(ele.toFixed(4));
    this._description = desc;
  }

  /**
   * Get PointId bytes
   * @returns 
   */
  getPointIdBytes(): string {

    let len = 16;
    let Res = this._pointId;

    return fillUp(Res, len);
  }

  getNorthingBytes(): string {

    let len = 16;
    let Res = this._nothing.toString(10);

    return fillUp(Res, len);
  }

  getEastingBytes(): string {

    let len = 16;
    let Res = this._easting.toString(10);

    return fillUp(Res, len);
  }

  getEelvationBytes(): string {

    let len = 16;
    let Res = this._elevation.toString(10);

    return fillUp(Res, len);
  }

  getDescriptionBytes(): string {

    let len = 16;
    let Res = this._description;

    return fillUp(Res, len);
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

