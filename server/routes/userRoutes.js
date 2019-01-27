// const {app} = require('./../server');
const { createUser } = require('../controller/userController');


module.exports = function (app) {
  app.route('/users')
    .post(createUser);
};
