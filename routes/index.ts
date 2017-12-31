import * as express from "express";


export function index(request: express.Request, response: express.Response) {
    response.render('index', { title: 'Express' });
}