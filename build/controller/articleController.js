"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showArticle = exports.callArticles = void 0;

var _newsapi = _interopRequireDefault(require("newsapi"));

var _config = require("../config/config");

var _models = require("../models");

var _connectingFuncs = require("./connectingFuncs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const newsapi = new _newsapi.default(process.env.NEWS_API);

const callArticles = async (req, res) => {
  let articles = await newsapi.v2.topHeadlines({
    language: 'en',
    country: 'us',
    category: "general"
  });
  let response = await (0, _connectingFuncs.asyncMapping)(articles.articles, _models.Article.findOrCreateWithSource);
  res.status(200).send(response); // Redis Caching for top stories, not ready for production

  let cachedArticles = response.map(article => JSON.stringify(article));

  _config.client.lpush('topStories', cachedArticles);

  let mostRecent = [];

  for (let i = 0; i < 6; i++) {
    debugger;
    console.log(response[i]._doc.title);

    _config.client.push(response[i]._doc.title);
  } // client.lpush('mostRecent', ...mostRecent)

};

exports.callArticles = callArticles;

const showArticle = async (req, res) => {
  const id = req.params.id;
  let article = await _models.Article.findById(id).populate('source', 'name');
  res.status(200).send(JSON.stringify(article, undefined, 2));
};

exports.showArticle = showArticle;
//# sourceMappingURL=articleController.js.map