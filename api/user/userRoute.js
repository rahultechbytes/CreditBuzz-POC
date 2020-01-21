const express = require('express');
const router = express.Router();
const userController = require('./controller');
const { validation, userValidation } = require('../../helpers/custom_validation');

router.post('/signIn', userController.signIn);

router.post('/signUp', validation(userValidation), userController.signUp);

router.put('/updateUser', userController.updateUser);

router.delete('/deleteUser', userController.deleteUser);

module.exports = router;