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
