const express = require('express');

const router = express.Router();

const bookuserController = require('../controllers/bookuser');
router.post('/create', bookuserController.create);
router.post('/getBooksByManager', bookuserController.getbooksbyManager);

module.exports = router;