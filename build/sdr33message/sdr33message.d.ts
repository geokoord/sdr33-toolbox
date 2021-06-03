import { Coordinate } from './../sdr33packages/coordinate/coordinate';
export interface Isdr33Export {
    addCoordinate(point: Coordinate): boolean;
    getMessage(): string;
}
export declare class Sdr33Export implements Isdr33Export {
    private _coordinatesList;
    private _header;
    private _job;
    /**
     * Create a new Sdr33 Export Job
     * @param jobName Name of the sdr33 job
     */
    constructor(jobName: string);
    /**
     * Adds a coordinate object to the coordinate list of the sdr33 export object
     * @param point
     * @returns boolean
     */
    addCoordinate(point: Coordinate): boolean;
    /**
     * Returns SDS33 Format message for uploading to Sokkia totalstation
     * @returns SDS33 Format message
     */
    getMessage(): string;
    /**
     * Generates a sdr33 Export object from a given geoJson Point Object
     * @param geojsonObj //JSON object (format: geojson)
     */
    static fromGeoJson(path: string): Sdr33Export;
}
/**
 * Calculates the SDR33 (Sokkia Dataformat) Checksum.
 * @param {*} data Data of which the checksum should be calculated
 * @returns
 */
export declare function getSdr33Checksum(data: any): any;
/**
 * Returns an valid SDR33(Sokkia Dataformat) Message.
 * @param { } rawdata
 */
export declare function getSdr33Message(rawdata: any): string;
