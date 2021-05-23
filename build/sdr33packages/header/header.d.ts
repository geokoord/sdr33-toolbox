/**
 * SDR33 (Sokkia format)
 *  Header class
 */
export declare class Header {
    private _typeCode;
    private _derivationCode;
    private _version;
    private _SerialNumber;
    private _DateTime;
    private _settings;
    private datalength;
    constructor();
    private getVersionBytes;
    private getSerialNumberBytes;
    private getDateTimeBytes;
    private getSettings;
    getMessage(): string;
}
