const express = require('express');

const router = express.Router();

const bookController = require('../controllers/book');
const isAuth = require('../middlewares/is-auth');

router.post('/add', isAuth, bookController.create);
router.get('/', isAuth, bookController.getAll);
// router.post('/delete/:id', isAuth, bookController.deleteById);

module.exports = router; 