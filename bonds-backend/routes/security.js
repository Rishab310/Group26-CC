const express = require('express');

const router = express.Router();

const securityController = require('../controllers/security');
const isAuth = require('../middlewares/is-auth');

router.post('/createSecurity', securityController.createSecurity);
router.get('/getAllSecurities', securityController.getAllSecurities);
router.post('/getSecurityById', securityController.getSecurityById);

module.exports = router; 