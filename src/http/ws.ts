import * as io from 'socket.io';
import { Http } from './http';
import { Logger } from '../utils/logger';
import { Server } from '../server';

export class WebSocket {
    static server: io.Server;

    static init() {
        WebSocket.server = io(Http.http);
        WebSocket.server.on('connection', WebSocket.handler);
    }

    static handler(socket: io.Socket) {
        socket.on('loglog', (data) => Logger.log(data));
        socket.on('infolog', (data) => Logger.info(data));
        socket.on('debuglog', (data) => Logger.debug(data));
        socket.on('warnlog', (data) => Logger.warn(data));
        socket.on('errorlog', (data) => Logger.error(data));
    }

    static listen() {
        Http.http.listen(Server.config.port, Server.config.host, function() {
            console.log(`Server listening on ${Server.config.host}:${Server.config.port}`);
        });
    }
}