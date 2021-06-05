/**
 * SDR33 (Sokkia format)
 * Coordinate class for point coodinate objects
 */
export declare class Coordinate {
    private _typeCode;
    private _derivationCode;
    private _pointId;
    private _nothing;
    private _easting;
    private _elevation;
    private _description;
    private datalength;
    /**
     * Create a SDR33 coordinate object
     * @param pName //Point name  (max. 16 characters)
     * @param N     //North value
     * @param E     //East value
     * @param ele   //elevation
     * @param desc  //point description (max. 16 characters)
     */
    constructor(pName: string, N: number, E: number, ele: number, desc: string);
    /**
     * Get PointId bytes
     * @returns
     */
    getPointIdBytes(): string;
    getNorthingBytes(): string;
    getEastingBytes(): string;
    getEelvationBytes(): string;
    getDescriptionBytes(): string;
    getMessage(): string;
}
