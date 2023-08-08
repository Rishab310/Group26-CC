const express = require('express');

const router = express.Router();

const counterpartyController = require('../controllers/counterparty');
const isAuth = require('../middlewares/is-auth');

router.post('/create', counterpartyController.create);
// router.get('/:id', isAuth, counterpartyController.getById);
router.get('/', isAuth, counterpartyController.getAll);
router.get('/search', isAuth, counterpartyController.searchByName);


module.exports = router; 