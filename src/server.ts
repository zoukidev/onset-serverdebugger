import { Config } from './utils/config';
import { Http } from './http/http';
import { WebSocket } from './http/ws';
import { IConfig } from './interfaces/config';

export class Server {
    static config: IConfig;

    static loadConfig() {
        Server.config = Config.load('config.yml');
    }

    static start() {
        Server.loadConfig();
        
        Http.init();
        WebSocket.init();
        WebSocket.listen();
    }
}

(() => {
    Server.start();
})();