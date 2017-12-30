import * as express from "express";
import { request } from "https";

const portNumber = 8081;

const app = express();

app.get('/', (request, response) => {
    throw new Error('Deliberate Error!');
})

app.get('/one/', (request, response) => {
    response.send('handler one')
})

app.get('/two/', (request, response) => {
    response.send('handler two')
})

/**
 * 处理错误
 */
app.use(function (error, request, response, next) {
    console.error(error.message);
    response.status(500).send('An error has occurred.')
})
app.listen(portNumber, 'localhost', () => {
    console.log("listening on localhost :" + portNumber);
})