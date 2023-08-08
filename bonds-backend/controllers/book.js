var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId; 

// Models
const Book = require("../models/book");
const Counterparty = require("../models/counterparty");
const Security = require("../models/security");
const Trade = require("../models/trade");
const User = require("../models/user");

exports.getAll = async (req, res, next) => {
    const books = await Book.find();
    
    res.status(200).json(books);
}

//create a new book
exports.create = async (req, res, next) => {
    const { bname} = req.body;
 
    // Validate request data
    if (!bname) {
      return res.status(400).json({ error: 'Book Name is required' });
    }
 
    // Check if book already exists
    const existingBook = await Book.findOne({ bookname: bname });
    if (existingBook) {
       return res.status(400).json({ error: 'Error: Book already exists' });
    }
    
    // const user = await User.findOne({ email: email });
    // if (!user) {
    //    res.status(400).json({ error: 'Error: User with given email not found' });
    //    return; 
    // }
    
    let newBook = new Book({
        bookname: bname
    });
    
    newBook = await newBook.save();
    if (!newBook) {
       res.status(500).json({ error: 'Error while creating book' });
       return; 
    }
    
    console.log(newBook._id);
    
    // Add book user for new book
    // let newBookUser = new BookUser({
    //     bookId: newBook,
    //     userId: user
    // });
    
    // newBookUser = await newBookUser.save();
    // if (!newBookUser) {
    //     res.status(500).json({ error: 'Error while creating book user'});
    //     return; 
    // }
    
    res.status(201).json(newBook);
}

exports.getTrades = async (req, res, next) => {
    const bookId = req.params.id;
    if (!bookId) {
        res.status(405).json({ error: 'Book id is required' });
        return;
    }
    
    const book = await Book.findById(bookId);
    if (!book) {
        res.status(404).json({ error: 'Book with given bookId not found' });
    }
    const trades = await Trade.find({ bookId: new ObjectId(book) });
    
    res.status(200).send(trades);             
}

// exports.deleteById = async (req, res, next) => {
//     // Get request data
//     const bookId = req.params.id;
    
//     if (!bookId) {
//         res.status(400).send({"error": "Some parameters are missing in JSON data"});
//         return;
//     }
    
//     // Validate data
//     const book = await Book.findOneAndDelete({ _id: bookId });
//     if (!book) {
//         res.status(404).send({"error": "Book does not exist, nothing to delete"});
//         return;
//     }
    
//     res.status(200).send(book);
// }