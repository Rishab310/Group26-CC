const express = require('express');

const router = express.Router();

const tradeController = require('../controllers/trade');
const isAuth = require('../middlewares/is-auth');

router.post('/create', tradeController.create);
router.get('/:id', tradeController.getById);
router.get('/', tradeController.getAll);
router.post('/:id/update', tradeController.update);
router.post('/delete/:id', tradeController.deleteById);


module.exports = router; 