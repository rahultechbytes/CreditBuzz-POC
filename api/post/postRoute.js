const express = require('express');
const router = express.Router();
const postController = require('./controller');

router.route('/post')
    .get(postController.getAllPost)
    .post(postController.userPost)
    .put(postController.updatePost)
    .delete(postController.deletePost)

module.exports = router;