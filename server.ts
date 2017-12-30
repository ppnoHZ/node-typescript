/// <reference path="./node_modules/@types/node/index.d.ts" />

/**
 * 
 */
import * as http from "http";

const portNumber = 8080;

function requestListener(request: http.ServerRequest, response: http.ServerResponse) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Method:' + request.method + '\n');
    response.write('Url' + request.url + '\n');
    response.write('typescript on server')
    response.end();
}


http.createServer(requestListener).listen(portNumber);


console.log('Listening on localhost:' + portNumber);