"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var http = require("http");
var path = require("path");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var routes = require("./routes/index");
var book = require("./routes/book");
var port = 8080;
var app = express();
app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.get('/', routes.index);
app.get('/book', book.list);
app.post('/book', book.submit);
app.use(express.static('.'));
//# sourceMappingURL=server.js.map