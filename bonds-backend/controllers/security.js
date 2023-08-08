var express = require('express');
// Models
const Security = require("../models/security");


exports.createSecurity = async (req, res, next) => {
  // Get request data
  const ISIN = req.body.ISIN;
  const issuer = req.body.issuer;
  const maturityDate = req.body.maturityDate;
  const coupon = req.body.coupon;
  const type = req.body.type;
  const faceValue = new Date(req.body.faceValue);
  const status = req.body.status;

  if ([ISIN, issuer, maturityDate, coupon, type, faceValue, status].some((val) => !val)) {
    res.status(400).send({ "error": "Some parameters are missing in JSON data" });
    return;
  }

  if (!ISIN) {
    const err = new Error("ISIN is required!");
    next(err);
  }
  if (!issuer) {
    const err = new Error("issuer is required!");
    next(err);
  }if (!maturityDate) {
    const err = new Error("maturityDate is required!");
    next(err);
  }
  if (!coupon) {
    const err = new Error("coupon is required!");
    next(err);
  }
  if (!type) {
    const err = new Error("type is required!");
    next(err);
  }
  if (!faceValue) {
    const err = new Error("faceValue is required!");
    next(err);
  }
  if (!status) {
    const err = new Error("status is required!");
    next(err);
  }
  
  Security.create({
    ISIN: ISIN,
    issuer: issuer,
    maturityDate: maturityDate,
    coupon: coupon,
    type: type,
    faceValue: faceValue ,
    status: status
  }).then((security) => {
    res.status(201).send(security);
  })
    .catch(err => next(err));
}

exports.getAllSecurity = async (req, res, next) => {
  Security.find({}).then((securities) => {
    res.status(200).json(securities);
  })
}