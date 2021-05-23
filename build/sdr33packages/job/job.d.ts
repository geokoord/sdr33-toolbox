/**
 * SDR33 (Sokkia format)
 *  Job identifier class
 */
export declare class Job {
    private _typeCode;
    private _derivationCode;
    private _jobName;
    private _settings;
    private datalength;
    constructor(jobName?: string);
    private getJobName;
    private getSettings;
    getMessage(): string;
}
