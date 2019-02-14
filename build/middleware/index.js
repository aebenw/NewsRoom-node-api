"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticate = void 0;

var _models = require("../models");

const authenticate = (req, res, next) => {
  var token = req.body.token;

  _models.User.findByToken(token).then(user => {
    if (!user) {
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    next();
  }).catch(e => {
    res.status(401).send();
  });
};

exports.authenticate = authenticate;
//# sourceMappingURL=index.js.map