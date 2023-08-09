const express = require('express');

const router = express.Router();

const tradeController = require('../controllers/trade');
const isAuth = require('../middlewares/is-auth');

router.post('/create', tradeController.create);
router.get('/:id', tradeController.getById);
router.get('/', tradeController.getAll);
router.post('/:id/update', tradeController.update);
router.post('/delete/:id', tradeController.deleteById);
router.post('/getTradeByBookID',tradeController.getTradeByBookID);
router.post('/getallunsettled',tradeController.getallunsettled);
router.post('/requestSettlement',tradeController.requestSettlement);
router.post('/CompleteSettlement',tradeController.CompleteSettlement);


module.exports = router; 