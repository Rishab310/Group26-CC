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
