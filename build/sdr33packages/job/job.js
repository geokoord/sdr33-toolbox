"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
const derivationCode_1 = require("./../derivationCode/derivationCode");
const sdr33Tools_1 = require("./../sdr33Tools");
/**
 * SDR33 (Sokkia format)
 *  Job identifier class
 */
class Job {
    /**
     * Create new SDR33 job object
     * @param jobName Name of the SDR33 job
     */
    constructor(jobName) {
        this._typeCode = '10';
        this._derivationCode = derivationCode_1.derivationCode.NotMeasured;
        this.datalength = 26; //length in bytes
        this._jobName = jobName || '';
        this._settings = { pointIdType: 1, IncludeEle: 2, atmosCorrection: 1, crcorrection: 1, refractionConstant: 1, seaLevelCorrection: 1 };
    }
    getJobName() {
        let len = 16;
        let Res = this._jobName;
        return sdr33Tools_1.fillUp(Res, len);
    }
    getSettings() {
        let len = 6;
        let Res = this._settings.pointIdType + '' + this._settings.IncludeEle + '' + this._settings.atmosCorrection + '' + this._settings.crcorrection + '' + this._settings.refractionConstant + '' + this._settings.seaLevelCorrection;
        return sdr33Tools_1.fillUp(Res, len);
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
exports.Job = Job;
//# sourceMappingURL=job.js.map