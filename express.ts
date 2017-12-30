import * as express from "express";
import { request } from "https";

const portNumber = 8081;

const app = express();

app.get('/', (request, response) => {
    response.send('You requested ' + request.query.firstname + ' ' + request.query.lastname);
})

app.get('/one/', (request, response) => {
    response.send('handler one')
})

app.get('/two/', (request, response) => {
    response.send('handler two')
})

app.listen(portNumber, 'localhost', () => {
    console.log("listening on localhost :" + portNumber);
})