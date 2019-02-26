const express = require('express');
const user = require('../controller/userController');
const userPath = express();
import { authenticate } from '../middleware'


  userPath.route('/')
    .post(user.createUser);

  userPath.route(`/articles`)
    .post(user.savedArticles);

  userPath.route('/favArticle')
    .post(user.favArticle);

  userPath.route('/followSource')
    .post(user.followSource);

  userPath.route('/login')
    .post(user.login);

  userPath.route('/session')
    .post(authenticate, user.retrieveSession)


export default userPath
