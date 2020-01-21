import { Config } from './utils/config';
import { Http } from './http/http';
import { IConfig } from './interfaces/config';

export class Server {
    static config: IConfig;

    static loadConfig() {
        Server.config = Config.load('config.yml');
    }

    static start() {
        Server.loadConfig();

        Http.init();
        Http.listen();
    }
}

(() => {
    Server.start();
})();