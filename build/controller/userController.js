"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieveSession = exports.savedArticles = exports.followSource = exports.favArticle = exports.login = exports.createUser = void 0;

var _models = require("../models");

var _server = require("../server");

var _connectingFuncs = require("./connectingFuncs");

const createUser = async (req, res) => {
  try {
    const user = await _models.User.create(req.body);
    let token = await user.generateAuthToken();
    res.status(200).send({
      user,
      token
    });
  } catch (e) {
    // ************* Not super flushed out, need to return back to.
    let errors = [];
    if (e.errmsg) errors.push("Email already taken");

    if (e.errors) {
      for (let key in e.errors) {
        if (e.errors[key].message) errors.push(e.errors[key].message);
      }
    }

    res.send({
      errors
    });
  }
};

exports.createUser = createUser;

const login = async (req, res) => {
  try {
    let user = await _models.User.findOne({
      email: req.body.email
    });

    if (user) {
      if (user.password === req.body.password) {
        res.send({
          user,
          token: user.tokens[0].token
        });
      } else res.send({
        errors: ['password is incorrect']
      });
    } else res.send({
      errors: ['email does not exist']
    });
  } catch (e) {
    res.send(e);
  }
};

exports.login = login;

const favArticle = async (req, res) => {
  let user = await _models.User.findById(req.body.userID);
  let article = await _models.Article.findById(req.body.articleID);
  user.articles.push(article);
  article.users.push(user);
  user.save().then(null, e => e);
  article.save().then(null, e => e);
  res.status(200).send({
    success: true
  });
};

exports.favArticle = favArticle;

const followSource = async (req, res) => {
  let user = await _models.User.findById(req.body.userID).then(doc => doc);
  let source = await _models.Source.findById(req.body.sourceID).then(doc => doc);
  user.sources.push(source);
  source.users.push(user);
  user.save().then(null, e => e);
  source.save().then(null, e => e);
  res.status(200).send(source);
};

exports.followSource = followSource;

const savedArticles = async (req, res) => {
  const {
    articles
  } = req.body;
  let foundArticles = await Promise.all(articles.map(async article => {
    let found = await _models.Article.findById(article);
    return found;
  }));
  res.status(200).send(JSON.stringify(foundArticles, undefined, 2));
};

exports.savedArticles = savedArticles;

const retrieveSession = (req, res) => {
  res.status(200).send(req.user);
};

exports.retrieveSession = retrieveSession;

_server.passport.serializeUser(function (userId, done) {
  done(null, userId);
});

_server.passport.deserializeUser(function (userId, done) {
  done(null, userId);
});
//# sourceMappingURL=userController.js.map