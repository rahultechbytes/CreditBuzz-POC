const express = require('express');
const router = express.Router();

const userRoute = require('./user/userRoute');
router.use('/', userRoute);

module.exports = router;