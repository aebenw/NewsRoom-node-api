"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkUsers = checkUsers;
exports.checkArticles = checkArticles;
exports.checkSource = checkSource;

var _supertest = _interopRequireDefault(require("supertest"));

var _server = require("../server");

var _models = require("../models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function checkUsers() {
  let user = await _models.User.findOne();

  if (!user) {
    user = await _models.User.create({
      name: 'eben',
      email: "e@e.com",
      password: "test"
    });
  }

  return user;
}

async function checkArticles() {
  let article = await _models.Article.findOne();

  if (!article) {
    article = _models.Article.create({
      author: "frank",
      title: "it happened again"
    });
  }

  return article;
}

async function checkSource() {
  let source = await _models.Source.findOne();

  if (!source) {
    source = _models.Source.create({
      name: "tbs",
      description: "the feel good place for news"
    });
  }

  return source;
}
//# sourceMappingURL=testConfig.js.map