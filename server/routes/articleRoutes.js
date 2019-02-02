const express = require('express');
const article = require('../controller/articleController');
const articlePath = express();

  articlePath.route('/')
    .get(article.callArticles);

  articlePath.route(`/:id`)
    .get(article.showArticle);

module.exports = articlePath;
