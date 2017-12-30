"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var portNumber = 8081;
var app = express();
app.get('/', function (request, response) {
    response.send('You requested ' + request.query.firstname + ' ' + request.query.lastname);
});
app.get('/one/', function (request, response) {
    response.send('handler one');
});
app.get('/two/', function (request, response) {
    response.send('handler two');
});
app.listen(portNumber, 'localhost', function () {
    console.log("listening on localhost :" + portNumber);
});
//# sourceMappingURL=express.js.map