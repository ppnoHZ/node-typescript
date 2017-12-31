import * as express from "express";

import * as http from "http";

import * as path from "path";

import * as bodyParser from "body-parser";

import * as methodOverride from "method-override";

import * as routes from './routes/index';

import * as book from './routes/book';

const port = 8080;
const app = express();

app.set('port', port);


app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'pug');

http.createServer(app).listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());

app.get('/', routes.index);

app.get('/book', book.list)
app.post('/book', book.submit)


app.use(express.static('.'));






