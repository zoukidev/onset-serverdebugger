export interface IConfig {
    host: string;
    port: number;
    colors: IConfigColors;
}

export interface IConfigColors {
    log: string;
    info: string;
    debug: string;
    warn: string;
    error: string;
}