const express = require('express');
const article = require('../controller/articleController');
const articlePath = express();
import { topStoryCache } from '../redis'

  articlePath.route('/')
    .get(topStoryCache, article.callArticles);

  articlePath.route(`/:id`)
    .get(article.showArticle);

export default  articlePath
