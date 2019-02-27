"use strict";

var _redis = require("../redis");

const express = require('express');

const article = require('../controller/articleController');

const articlePath = express();
articlePath.route('/').get(_redis.topStoryCache, article.callArticles);
articlePath.route(`/:id`).get(article.showArticle);
module.exports = articlePath;
//# sourceMappingURL=articleRoutes.js.map