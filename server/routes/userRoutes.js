const express = require('express');
const user = require('../controller/userController');
const userPath = express();
import { authenticate } from '../middleware'


  userPath.route('/')
    .post(user.createUser);

  userPath.route('/login')
    .post(user.login);

  userPath.route('/session')
    .post(authenticate, user.retrieveSession)

  userPath.route('/favArticle')
    .post(user.favArticle);

  userPath.route('/followSource')
    .post(user.followSource);


module.exports = userPath;
