import { derivationCode } from './../derivationCode/derivationCode'
import moment from 'moment'
import { fillUp } from './../sdr33Tools';

/**
 * SDR33 (Sokkia format) 
 *  Job identifier class 
 */
export class Job {

  private _typeCode: string = '10';
  private _derivationCode: derivationCode = derivationCode.NotMeasured;
  private _jobName: string;
  private _settings: { pointIdType: number, IncludeEle: number, atmosCorrection: number, crcorrection: number, refractionConstant: number, seaLevelCorrection: number };

  private datalength: number = 26      //length in bytes

  //constructor
  constructor(jobName?: string) {
    this._jobName = jobName || '';
    this._settings = { pointIdType: 1, IncludeEle: 2, atmosCorrection: 1, crcorrection: 1, refractionConstant: 1, seaLevelCorrection: 1 };
  }

  private getJobName(): string {
    let len = 16;
    let Res = this._jobName;
    return fillUp(Res, len);
  }

  private getSettings(): string {
    let len = 6;
    let Res = this._settings.pointIdType + '' + this._settings.IncludeEle + '' + this._settings.atmosCorrection + '' + this._settings.crcorrection + '' + this._settings.refractionConstant + '' + this._settings.seaLevelCorrection;
    return fillUp(Res, len);
  }


  getMessage() {
    let m = '';

    m += this._typeCode;
    m += this._derivationCode;
    m += this.getJobName();
    m += this.getSettings();
    return m;
  }
}