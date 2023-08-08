const express = require('express');

const router = express.Router();

const bookUserController = require('../controllers/bookuser');
const isAuth = require('../middlewares/is-auth');
const isAdmin = require('../middlewares/isAdmin');

router.post('/assign', bookUserController.assign);
router.post('/revoke', bookUserController.revoke);
// router.get('/', isAdmin, bookUserController.getAll);
// router.post('/delete/:id', isAuth, bookController.deleteById);

module.exports = router; 