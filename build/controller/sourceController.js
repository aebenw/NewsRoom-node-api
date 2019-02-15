"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchSources = exports.showSource = exports.callSources = void 0;

var _newsapi = _interopRequireDefault(require("newsapi"));

var _models = require("../models");

var _connectingFuncs = require("./connectingFuncs");

var _server = require("../server");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const newsapi = new _newsapi.default(process.env.NEWS_API);

const callSources = async (req, res) => {
  let response = await newsapi.v2.sources({
    language: 'en',
    country: 'us',
    category: "general"
  });
  let answer = await (0, _connectingFuncs.asyncMapping)(response.sources, _models.Source.findOrCreateWithCat);
  res.status(200).send(answer); // Redis Caching for news sources
  // a lot of work is done to fetch their sources
  // and to get their pictures
  // let cachedSources = JSON.stringify(answer)
  // client.set('sources', cachedSources)
};

exports.callSources = callSources;

const showSource = (req, res) => {
  const id = req.params.id;

  let source = _models.Source.findById(id);

  source.populate({
    path: 'articles',
    select: "author title description url urlToImage content"
  }).exec((err, posts) => {
    res.status(200).send(JSON.stringify(posts, undefined, 2));
  });
};

exports.showSource = showSource;

const searchSources = async (req, res) => {
  let sources = await _models.Source.find({
    id: req.body.source
  });

  _server.client.hgetall(req.body.source, (err, obj) => {
    res.status(200).send(obj);
  });
};

exports.searchSources = searchSources;
//# sourceMappingURL=sourceController.js.map