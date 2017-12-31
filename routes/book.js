"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Book from "../modal/book";
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/books', { useMongoClient: true });
var bookSchema = new mongoose.Schema({
    title: String, author: String, isbn: String
});
var Book = mongoose.model('Book', bookSchema);
function list(request, response) {
    // response.render('book', { 'title': 'Books', 'books': [] });
    Book.find({})
        .then(function (res) {
        response.render('book', { 'title': 'Books', 'books': res });
    })
        .catch(function (err) {
        return next(err);
    });
}
exports.list = list;
function submit(request, response) {
    // const newBook = new Book(request.body.book_title, request.body.author, request.body.book_isbn);
    // response.render('book', { title: 'Books', 'books': [newBook] });
    var newBook = new Book({
        title: request.body.book_title,
        author: request.body.author,
        isbn: request.body.book_isbn
    });
    newBook.save()
        .then(function (res) {
        response.redirect('/book');
    })
        .catch(function (err) {
        return next(err);
    });
}
exports.submit = submit;
//# sourceMappingURL=book.js.map