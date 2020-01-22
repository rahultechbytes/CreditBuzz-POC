const express = require('express');
const router = express.Router();

const userRoute = require('./user/userRoute');
router.use('/', userRoute);

const postRoute = require('./post/postRoute');
router.use('/', postRoute);

module.exports = router;