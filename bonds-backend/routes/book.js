const express = require('express');

const router = express.Router();

const bookController = require('../controllers/book');
const isAuth = require('../middlewares/is-auth');

router.post('/create', bookController.create);
router.get('/', bookController.getAll);
router.get('/:id/trades', bookController.getTrades);
// router.post('/delete/:id', isAuth, bookController.deleteById);

module.exports = router; 