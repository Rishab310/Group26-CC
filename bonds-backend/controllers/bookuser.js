var express = require('express');
var router = express.Router();

// Models
const bookuser = require("../models/bookuser");

exports.create = async (req, res, next) => {
  // Get request data
  const bookId = req.body.bookId;
  const userId = req.body.userId;

  bookuser.create({
    bookId: bookId,
    userId: userId,
  }).then((security) => {
    res.status(201).send(security);
  })
    .catch(err => next(err));
}

exports.getbooksbyManager = async (req, res, next) => {
  const userId = req.body.userId;
  bookuser.find({ userId }).populate('bookId').then((bookusers) => {
    const books = bookusers.map((book) => book.bookId);
    res.status(200).json(books);
     })
    .catch((err) => next(err));

}
