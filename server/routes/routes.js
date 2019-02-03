const userPath = require('./userRoutes');
const sourcePath = require('./sourceRoutes');
const articlePath = require('./articleRoutes');
const commentPath = require('./commentRoutes')

module.exports = function (app) {
  app.get('/', (req, res) => {
    res.status(200).send('testing');
  });
  app.use('/user', userPath);
  app.use('/comments', commentPath);
  app.use('/news/sources', sourcePath);
  app.use('/news/articles', articlePath);

};

    // "test": "nodemon --exec 'mocha */**.test.js'",
