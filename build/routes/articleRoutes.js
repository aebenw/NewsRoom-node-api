"use strict";

const express = require('express');

const article = require('../controller/articleController');

const articlePath = express(); // import { topStoryCache } from '../redis'

articlePath.route('/').get(article.callArticles);
articlePath.route(`/:id`).get(article.showArticle);
module.exports = articlePath;
//# sourceMappingURL=articleRoutes.js.map