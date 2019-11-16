import * as colors from 'colors/safe';
import { Server } from '../server';

export class Logger {
    static log(log: any) {
        // @ts-ignore
        console.log(colors[Server.config.colors.log]('[Log]'), log);
    }
    static info(log: any) {
        // @ts-ignore
        console.log(colors[Server.config.colors.info]('[Info]'), log);
    }
    static debug(log: any) {
        // @ts-ignore
        console.log(colors[Server.config.colors.debug]('[Debug]'), log);
    }
    static warn(log: any) {
        // @ts-ignore
        console.log(colors[Server.config.colors.warn]('[Warn]'), log);
    }
    static error(log: any) {
        // @ts-ignore
        console.log(colors[Server.config.colors.error]('[Error]'), log);
    }
}