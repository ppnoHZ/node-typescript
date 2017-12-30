"use strict";
/// <reference path="./node_modules/@types/node/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 */
var http = require("http");
var portNumber = 8080;
function requestListener(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Method:' + request.method + '\n');
    response.write('Url' + request.url + '\n');
    response.write('typescript on server');
    response.end();
}
http.createServer(requestListener).listen(portNumber);
console.log('Listening on localhost:' + portNumber);
//# sourceMappingURL=server.js.map