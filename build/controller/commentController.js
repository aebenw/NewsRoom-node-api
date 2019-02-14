"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showComment = exports.postComment = void 0;

var _models = require("../models");

const postComment = (req, res) => {
  _models.Comment.create({
    content: req.body.content,
    user: req.body.user
  }).then(doc => {
    res.status(200).send(doc);
  }, e => res.status(400).send(e));
};

exports.postComment = postComment;

const showComment = async (req, res) => {
  _models.Comment.findById(req.params.id).populate({
    path: 'user',
    select: 'name'
  }).exec().then(doc => {
    res.status(200).send(doc);
  });
};

exports.showComment = showComment;
//# sourceMappingURL=commentController.js.map