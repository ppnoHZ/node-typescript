"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var portNumber = 8081;
var app = express();
app.get('/', function (request, response) {
    throw new Error('Deliberate Error!');
});
app.get('/one/', function (request, response) {
    response.send('handler one');
});
app.get('/two/', function (request, response) {
    response.send('handler two');
});
app.use(function (error, request, response, next) {
    console.error(error.message);
    response.status(500).send('An error has occurred.');
});
app.listen(portNumber, 'localhost', function () {
    console.log("listening on localhost :" + portNumber);
});
//# sourceMappingURL=express.js.map