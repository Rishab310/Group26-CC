var express = require('express');
var router = express.Router();

// Models
const Book = require("../models/book");
const Counterparty = require("../models/counterparty");
const Security = require("../models/security");
const Trade = require("../models/trade");
const User = require("../models/user");

// API to get all counterparties
exports.getAll = async (req, res) => {
    const counterparties = await Counterparty.find();
    
    res.status(200).json(counterparties);
}
  
  
  
// API to create a new counterparty
exports.create = async (req, res) => {
    const { name } = req.body;
  
    // Validate request data
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
  
    // Check if the counterparty already exists
    const existingCounterparty = await Counterparty.findOne({ name });
    if (existingCounterparty) {
    return res.status(400).json({ error: 'Counterparty already exists' });
    }
  
    // Create a new counterparty
    let newCounterparty = new Counterparty({ name });
    newCounterparty = await newCounterparty.save();
    if (!newCounterparty) {
        res.status(500).json({ error: 'Error while creating counterparty' });
        return;
    }
    
    res.status(201).json(newCounterparty);
}
  
  
  
// API to search for a single counterparty by name

exports.searchByName = async (req, res) => {
    const { name } = req.body;
    
    // Find the counterparty by name
    const counterparty = await Counterparty.findOne({ name: name });
    
    if (!counterparty) {
        res.status(404).json({ error: 'Counterparty not found' });
        return;
    }
    
    res.status(200).json(counterparty);
}