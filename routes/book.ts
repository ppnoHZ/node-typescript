import * as express from "express";
// import Book from "../modal/book";
import * as mongoose from "mongoose";

declare var next: (error: any) => void;

mongoose.connect('mongodb://localhost:27017/books', { useMongoClient: true });

interface Book extends mongoose.Document {
    title: string;
    author: string;
    isbn: string;
}
const bookSchema = new mongoose.Schema({
    title: String, author: String, isbn: String
})
const Book = mongoose.model<Book>('Book', bookSchema);


export function list(request: express.Request, response: express.Response) {
    // response.render('book', { 'title': 'Books', 'books': [] });

    Book.find({})
        .then((res) => {
            response.render('book', { 'title': 'Books', 'books': res })
        })
        .catch((err) => {
            return next(err);
        })
}

export function submit(request: express.Request, response: express.Response) {
    // const newBook = new Book(request.body.book_title, request.body.author, request.body.book_isbn);

    // response.render('book', { title: 'Books', 'books': [newBook] });
    const newBook = new Book({
        title: request.body.book_title,
        author: request.body.author,
        isbn: request.body.book_isbn
    })

    newBook.save()
        .then((res) => {
            response.redirect('/book');
        })
        .catch((err) => {
            return next(err);

        })
}
