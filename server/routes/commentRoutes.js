const express = require('express');
const comment = require('../controller/commentController');
const commentPath = express();

  commentPath.route('/')
    .post(comment.postComment);
  commentPath.route('/:id')
    .get(comment.showComment);


module.exports = commentPath;
