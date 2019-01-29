const express = require('express');
const user = require('../controller/userController');
const userPath = express();


  userPath.route('/')
    .post(user.createUser);

  userPath.route('/login')
    .post(user.login);


module.exports = userPath;
