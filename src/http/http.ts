import * as express from 'express';
import * as http from 'http';

export class Http {
    static app: Express.Application;
    static http: http.Server;

    static init() {
        Http.app = express();
        Http.http = http.createServer(Http.app);
    }
}