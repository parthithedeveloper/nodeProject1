const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin');

router.get('/getAllUser',adminController.getAllUser);




module.exports = router;