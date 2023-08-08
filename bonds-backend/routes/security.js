const express = require('express');

const router = express.Router();

const securityController = require('../controllers/security');
const isAuth = require('../middlewares/is-auth');

router.post('/createSecurity', securityController.createSecurity);

module.exports = router; 