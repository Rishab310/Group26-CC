var express = require('express');
var router = express.Router();

// Models
const Book = require("../models/book");
const User = require("../models/user");


exports.assign = async (req, res, next) => {
    const { bookId, userId } = req.body;
 
    // Validate request data
    if (!bookId || !userId) {
      return res.status(400).json({ error: 'Book id and user id are required' });
    }
 
    const book = await Book.findOne({ _id: bookId });
    if (!book) {
       return res.status(404).json({ error: 'Error: Book not found' });
    }
    
    let user = await User.findOne({ _id: userId });
    if (!user) {
       res.status(404).json({ error: 'Error: User not found' });
       return; 
    }
    
    if (!user.books.includes(bookId)) {
        user.books.push(bookId);
    }
    
    user = await user.save();
    if (!user) {
        res.status(500).json({ error: 'Error: Could not assign user' });
        return; 
    }
    
    res.status(201).json(user);
}

exports.revoke = async (req, res, next) => {
    const { bookId, userId } = req.body;
 
    // Validate request data
    if (!bookId || !userId) {
      return res.status(400).json({ error: 'Book id and user id are required' });
    }
 
    const book = await Book.findOne({ _id: bookId });
    if (!book) {
       return res.status(404).json({ error: 'Error: Book not found' });
    }
    
    let user = await User.findOne({ _id: userId });
    if (!user) {
       res.status(404).json({ error: 'Error: User not found' });
       return; 
    }
    
    if (user.books.includes(bookId)) {
        let index = user.books.indexOf(bookId);
        user.books.splice(index, 1);
    }
    
    user = await user.save();
    if (!user) {
        res.status(500).json({ error: 'Error: Could not revoke user' });
        return; 
    }
    
    res.status(200).json(user);
}