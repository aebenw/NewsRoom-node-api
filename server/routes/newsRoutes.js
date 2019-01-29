const express = require('express');
const news = require('../controller/newsController');
const newsPath = express();

  newsPath.route('/sources')
    .get(news.callSources);

  newsPath.route('/articles')
    .get(news.callArticles);

module.exports = newsPath;
