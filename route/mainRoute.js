const express = require('express');
const router = express.Router();
const authRoute = require('./authRoute');
const userRoute = require('./userRoute');
const adminRoute = require('./adminRoute');

const userMiddlware = require('../middlware/userMiddlware');
const adminMiddlware = require('../middlware/adminMiddlware');

// Register api
router.use('/api', authRoute);


//user api
router.use('/api/user',userMiddlware.userCheck,userRoute);



//admin api
router.use('/api/admin',adminMiddlware.adminCheck,adminRoute);

module.exports = router;