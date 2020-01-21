import * as express from 'express';
import { Server } from '../server';
import { Logger } from '../utils/logger';

export class Http {
    static app: express.Express;

    static init() {
        Http.app = express();
        Http.loadHandlers();
    }

    static loadHandlers() {
        Http.app.get('/', (req: express.Request, res: express.Response) => Logger.log(req.query));
    }

    static listen() {
        Http.app.listen(Server.config.port, Server.config.host, function() {
            console.log(`Server listening on ${Server.config.host}:${Server.config.port}`);
        });
    }
}