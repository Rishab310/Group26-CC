const express = require('express');

const router = express.Router();

const tradeController = require('../controllers/trade');
const isAuth = require('../middlewares/is-auth');

router.post('/create', isAuth, tradeController.create);
router.get('/:id', isAuth, tradeController.getById);
router.get('/', isAuth, tradeController.getAll);
router.post('/delete/:id', isAuth, tradeController.deleteById);


module.exports = router; 