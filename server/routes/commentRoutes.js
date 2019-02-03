const express = require('express');
const comment = require('../controller/commentController');
const commentPath = express();

  commentPath.route('/')
    .post(comment.postComment);


module.exports = commentPath;
