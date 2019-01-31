const { API, LINK_PREVIEW } = require('../constants/api');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(API);
const fetch = require('node-fetch');
const {Source} = require('../models/news/Sources');
const {Article} = require('../models/news/Articles');


exports.callSources = async (req, res) => { /* ESLint-disable-line */
  let response = await newsapi.v2.sources({
    language: 'en',
    country: 'us',
    category: "general"
  })

  let answer = await asyncMapping(response.sources, findOrCreateSource)

  Promise.all(answer).then(complete => {
    res.status(200).send(complete);
 })
};

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

exports.showSource = (req, res) => {
  const id = req.params.id;
  let source = Source.findById(id)
  .populate('articles')
  .exec((err, posts) => {
    console.log(posts)
    res.status(200).send(JSON.stringify(posts, undefined, 2));
  });
}

async function findOrCreateSource(source){
  let found = await Source.find({id: source.id})
  if(!found.length){
    const newSource = new Source(source);
    found = await newSource.save()
    .then(doc => doc, (e) => console.log("e"));
  }
    return found;
 };

async function asyncMapping (objects, callback){
  return objects.map(async(obj) => await callback(obj))
}

async function findOrCreateArticle(article){
  let sourceId = article.source.id
  let sourceName = article.source.name
  let source = await Source.findOne({id: sourceId, name: sourceName})

  let foundArticle = await Article.findOne({id: article.id})
  if(!foundArticle || !foundArticle.length){
    delete article["source"]

    const newArticle = new Article(article);
    foundArticle = await newArticle.save()
    .then(doc => doc, (e) => console.log(e));

    if(source) populateRelationships(source, foundArticle)

  }
  return foundArticle;
};

function populateRelationships(source, article){
  source.articles.push(article);
  article.source = source;
  source.save()
  .then(doc => console.log(), e => console.log(e))
  article.save()
  .then(doc => console.log(), e => console.log(e))
}
