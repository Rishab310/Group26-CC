const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth');
const isAuth = require('../middlewares/is-auth');

router.post('/signup', authController.signup)
router.post('/signin', authController.signin);
router.post('/verifyToken', authController.verifyToken);
router.get('/getUsers', authController.getUsers);
// router.post('/getUserById', authController.getUserById);
module.exports = router; 