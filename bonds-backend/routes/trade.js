const express = require('express');

const router = express.Router();

const tradeController = require('../controllers/trade');
const isAuth = require('../middlewares/is-auth');

router.post('/create', tradeController.create);
router.get('/:id', isAuth, tradeController.getById);
router.get('/', isAuth, tradeController.getAll);
router.post('/:id/update', isAuth, tradeController.update);
router.post('/delete/:id', isAuth, tradeController.deleteById);


module.exports = router; 