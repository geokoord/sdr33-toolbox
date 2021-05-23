"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdr33Message = exports.getSdr33Checksum = exports.Sdr33Export = void 0;
const header_1 = require("./../sdr33packages/header/header");
const job_1 = require("./../sdr33packages/job/job");
const coordinate_1 = require("./../sdr33packages/coordinate/coordinate");
const fs_1 = __importDefault(require("fs"));
class Sdr33Export {
    /**
     * Create a new Sdr33 Export Job
     * @param jobName Name of the sdr33 job
     */
    constructor(jobName) {
        this._job = new job_1.Job(jobName);
        this._header = new header_1.Header();
        this._coordinatesList = [];
    }
    /**
     * Adds a coordinate object to the coordinate list of the sdr33 export object
     * @param point
     */
    addCoordinate(point) {
        this._coordinatesList.push(point);
        return true;
    }
    getMessage() {
        let rawmessage = '';
        rawmessage += this._header.getMessage() + '\n';
        rawmessage += this._job.getMessage() + '\n';
        for (let P of this._coordinatesList) {
            rawmessage += P.getMessage() + '\n';
        }
        let message = getSdr33Message(rawmessage);
        return message;
    }
    /**
     * Generates a sdr33 Export object from a given geoJson Point Object
     * @param geojsonObj //JSON object (format: geojson)
     */
    static fromGeoJson(path) {
        let geojson = null;
        try {
            let raw = fs_1.default.readFileSync(path, 'utf-8');
            geojson = JSON.parse(raw);
        }
        catch (error) {
            throw error;
        }
        if (geojson) {
            let name = geojson.name;
            let resExport = new Sdr33Export(geojson.name);
            let i = 0; //Point Index
            for (let pointFeature of geojson.features) {
                let p = new coordinate_1.Coordinate(pointFeature.properties.name || String(i), pointFeature.geometry.coordinates[0], pointFeature.geometry.coordinates[1], pointFeature.geometry.coordinates[2] || 0, pointFeature.properties.description || '');
                resExport.addCoordinate(p);
                i++;
            }
            return resExport;
        }
    }
}
exports.Sdr33Export = Sdr33Export;
/**
 * Calculates the SDR33 (Sokkia Dataformat) Checksum.
 * @param {*} data Data of which the checksum should be calculated
 * @returns
 */
function getSdr33Checksum(data) {
    let asscii = [];
    let sum = 0;
    for (let index = 0; index < data.length; index++) {
        let assciiVal = data.charCodeAt(index);
        asscii.push(assciiVal);
        //Exclusive of CR(0x0D), LF(0x0A), STX(0x02) and ETX(0x03)
        if (assciiVal != 0x0d &&
            assciiVal != 0x0a &&
            assciiVal != 0x02 &&
            assciiVal != 0x03) {
            sum += assciiVal;
        }
    }
    let checksum = sum % 65536;
    function pad(num, size) {
        num = num.toString();
        while (num.length < size)
            num = "0" + num;
        return num;
    }
    return pad(checksum, 5);
}
exports.getSdr33Checksum = getSdr33Checksum;
/**
 * Returns an valid SDR33(Sokkia Dataformat) Message.
 * @param { } rawdata
 */
function getSdr33Message(rawdata) {
    let resMessage = "";
    resMessage += String.fromCharCode(0x02); //CR
    resMessage += String.fromCharCode(0x0a); //LF
    resMessage += rawdata;
    //resMessage += String.fromCharCode(0x0a); //LF
    resMessage += ""; //ETX
    resMessage += getSdr33Checksum(resMessage);
    return resMessage;
}
exports.getSdr33Message = getSdr33Message;
//# sourceMappingURL=sdr33message.js.map