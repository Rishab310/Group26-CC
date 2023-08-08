var express = require('express');
var router = express.Router();

// Models
const Book = require("../models/book");
const Counterparty = require("../models/counterparty");
const Security = require("../models/security");
const Trade = require("../models/trade");

exports.create = async (req, res, next) => {
    // Get request data
    const bookId = req.body.bookId;
    const counterpartyId = req.body.counterpartyId;
    const securityId = req.body.securityId;
    const status = "ACTIVE";
    const price = req.body.price;
    const buy_sell = req.body.buy_sell;
    const tradeDate = new Date(req.body.tradeDate);
    const settlementDate = req.body.settlementDate; 
    const quantity = req.body.quantity;
    
    // if ([bookId, counterpartyId, securityId, price, buy_sell, tradeDate, quantity].some((val) => !val)) {
    //     res.status(400).send({"error": "Some parameters are missing in JSON data"});
    //     return;
    // }
    
    // // Validate data
    // const book = await Book.findOne({ id: bookId });
    // if (!book) {
    //     res.status(404).send({"error": "Book does not exist"});
    //     return;
    // }
        
    // const counterParty = await Counterparty.findOne({ id: counterpartyId });
    // if (!counterParty) {
    //     res.status(404).send({"error": "Counter party does not exist"});
    //     return;
    // }
        
    // const security = await Security.findOne({ id: securityId });
    // if (!security) {
    //     res.status(404).send({"error": "Counter party does not exist"});
    //     return;
    // }
        
    // if (buy_sell !== "BUY" && buy_sell !== "SELL") {
    //     res.status(400).send({"error": "buy_sell should be equal to either BUY or SELL"});
    //     return;
    // }
        
    // if (quantity <= 0) {
    //     res.status(400).send({"error": "Quantity should be greater than 0"});
    //     return;
    // }
    
    // if (price <= 0) {
    //     res.status(400).send({"error": "Price should be greater than 0"});
    //     return;
    // }
    
    // if (isNaN(tradeDate)) {
    //     res.status(400).send({"error": "Trade date is invalid"});
    //     return;
    // }
    
    const newTrade = new Trade({
        counterpartyId: counterpartyId,
        bookId: bookId,
        securityId: securityId,
        status: status,
        price: price,
        buy_sell: buy_sell,
        tradeDate: tradeDate.toISOString(),
        settlementDate: settlementDate,
        quantity: quantity
    });
    
    const savedTrade = await newTrade.save();
    
    res.status(201).send(savedTrade);
}


exports.getById = async (req, res, next) => {
    // Get request data
    const tradeId = req.params.id;
    
    if (!tradeId) {
        res.status(400).send({"error": "Some parameters are missing in JSON data"});
        return;
    }
    
    // Validate data
    const trade = await Trade.findOne({ _id: tradeId });
    if (!trade) {
        res.status(404).send({"error": "Trade does not exist"});
        return;
    }
    
    res.status(200).send(trade);
}

exports.getAll = async (req, res, next) => {
    const trades = await Trade.find({});
    
    res.status(200).send(trades);
}

exports.update = async (req, res, next) => {
    // Get request data
    const tradeId = req.params.id;
    const status = req.body.status;
    
    if (!tradeId || !status) {
        res.status(400).send({"error": "Trade Id and status required"});
        return;
    }
    
    let trade = await Trade.findOne({ _id: tradeId });
    if (!trade) {
        res.status(404).send({"error": "Trade does not exist"});
        return;
    }
    
    if (status !== "SETTLED" && status !== "OVERDUE") {
        res.status(400).send({"error": "Invalid status value (ACTIVE, SETTLED or OVERDUE allowed)"});
        return;
    }
    
    if (trade[status] == "SETTLED" && status == "SETTLED") {
        res.status(400).send({"error": "Trade already settled"});
        return;
    }
    
    trade.status = status;
    // Settle active or overdue trade
    if (status == "SETTLED") {
        trade.settlementDate = Date.now();
    }
    
    trade = await trade.save();
    
    res.status(201).send(trade);
}

exports.deleteById = async (req, res, next) => {
    // Get request data
    const tradeId = req.params.id;
    
    if (!tradeId) {
        res.status(400).send({"error": "Some parameters are missing in JSON data"});
        return;
    }
    
    // Validate data
    const trade = await Trade.findOneAndDelete({ _id: tradeId });
    if (!trade) {
        res.status(404).send({"error": "Trade does not exist, nothing to delete"});
        return;
    }
    
    res.status(200).send(trade);
}