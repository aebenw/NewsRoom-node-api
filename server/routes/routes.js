const userPath = require('./userRoutes');
const newsPath = require('./newsRoutes');


module.exports = function (app) {

  app.use('/user', userPath);
  app.use('/news', newsPath);

};
