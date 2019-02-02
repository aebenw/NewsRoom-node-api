const userPath = require('./userRoutes');
const sourcePath = require('./sourceRoutes');
const articlePath = require('./articleRoutes');


module.exports = function (app) {

  app.use('/user', userPath);
  app.use('/news/sources', sourcePath);
  app.use('/news/articles', articlePath);

};
