const { API, LINK_PREVIEW } = require('../constants/api');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(API);
const {Article} = require('../models/news/Articles');
const {Source} = require('../models/news/Sources');
const {populateRelationships, asyncMapping} = require('./connectingFuncs')

exports.callArticles = async (req, res) => {
  let articles = await newsapi.v2.topHeadlines({
    language: 'en',
    country: 'us',
    category: "general"
  })

  let response = await asyncMapping(articles.articles, findOrCreateArticle)

  Promise.all(response).then(complete => {
    res.status(200).send(complete)
  })
}

exports.showArticle = (req, res) => {
  const id = req.params.id;
  let article = Article.findById(id)
  .populate({path: 'sources', select: "name"})
  .exec((err, article) => {
    res.status(200).send(JSON.stringify(article, undefined, 2));
  });
}

async function findOrCreateArticle(article){
  let sourceId = article.source.id
  let sourceName = article.source.name
  let source = await Source.findOne({id: sourceId, name: sourceName})
  let foundArticle = await Article.findOne({title: article.title})
  if(!foundArticle){
    delete article["source"]

    const newArticle = new Article(article);
    foundArticle = await newArticle.save()
    .then(doc => doc, (e) => console.log(e));

    if(source) populateRelationships(source, foundArticle)

  }
  return foundArticle;
};
