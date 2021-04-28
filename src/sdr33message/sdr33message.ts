import { Header } from './../sdr33packages/header/header'
import { Job } from './../sdr33packages/job/job'
import { Coordinate } from './../sdr33packages/coordinate/coordinate'
import fs from 'fs';

export class Sdr33Export {

  private _coordinatesList: Array<Coordinate>;
  private _header: Header;
  private _job: Job;

  constructor(jobName: string) {
    this._job = new Job(jobName);
    this._header = new Header();
    this._coordinatesList = [];
  }

  /**
   * Adds a coordinate object to the coordinate list of the sdr33 export object
   * @param point 
   */
  addCoordinate(point: Coordinate) {
    this._coordinatesList.push(point);
  }

  getMessage() {
    let rawmessage = ''
    rawmessage += this._header.getMessage() + '\n';
    rawmessage += this._job.getMessage() + '\n';

    for (let P of this._coordinatesList) {
      rawmessage += P.getMessage() + '\n';
    }

    let message = getSdr33Message(rawmessage)

    return message;
  }

  /**
   * Generates a sdr33 Export object from a given geoJson Point Object
   * @param geojsonObj //JSON object (format: geojson)
   */
  static fromGeoJson(path: string) {

    let geojson: any = null;

    try {

      let raw = fs.readFileSync(path, 'utf-8');
      geojson = JSON.parse(raw);

    } catch (error) {
      throw error;
    }

    if (geojson) {

      let name = geojson.name;

      let resExport = new Sdr33Export(geojson.name);

      let i = 0;  //Point Index
      for (let pointFeature of geojson.features) {
        let p: Coordinate = new Coordinate(pointFeature.properties.name || String(i), pointFeature.geometry.coordinates[0], pointFeature.geometry.coordinates[1], pointFeature.geometry.coordinates[2] || 0, pointFeature.properties.description || '')
        resExport.addCoordinate(p)
        i++;
      }

      return resExport;
    }

  }

}



/**
 * Calculates the SDR33 (Sokkia Dataformat) Checksum.
 * @param {*} data Data of which the checksum should be calculated
 * @returns
 */
export function getSdr33Checksum(data) {
  let asscii = [];
  let sum = 0;
  for (let index = 0; index < data.length; index++) {
    let assciiVal = data.charCodeAt(index);
    asscii.push(assciiVal);

    //Exclusive of CR(0x0D), LF(0x0A), STX(0x02) and ETX(0x03)
    if (
      assciiVal != 0x0d &&
      assciiVal != 0x0a &&
      assciiVal != 0x02 &&
      assciiVal != 0x03
    ) {
      sum += assciiVal;
    }
  }

  let checksum = sum % 65536;

  function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  }

  return pad(checksum, 5);
}

/**
 * Returns an valid SDR33(Sokkia Dataformat) Message.
 * @param { } rawdata
 */
export function getSdr33Message(rawdata) {
  let resMessage = "";

  resMessage += String.fromCharCode(0x02); //CR
  resMessage += String.fromCharCode(0x0a); //LF

  resMessage += rawdata;

  //resMessage += String.fromCharCode(0x0a); //LF

  resMessage += ""; //ETX
  resMessage += getSdr33Checksum(resMessage);
  return resMessage;
}