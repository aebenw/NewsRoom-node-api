"use strict";

var _middleware = require("../middleware");

const express = require('express');

const user = require('../controller/userController');

const userPath = express();
userPath.route('/').post(user.createUser);
userPath.route(`/articles`).post(user.savedArticles);
userPath.route('/favArticle').post(user.favArticle);
userPath.route('/followSource').post(user.followSource);
userPath.route('/login').post(user.login);
userPath.route('/session').post(_middleware.authenticate, user.retrieveSession);
module.exports = userPath;
//# sourceMappingURL=userRoutes.js.map