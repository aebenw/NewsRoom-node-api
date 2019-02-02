const { API, LINK_PREVIEW } = require('../constants/api');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(API);
const { Source } = require('../models/news/Sources');
const { asyncMapping } = require('./connectingFuncs')


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


exports.showSource = (req, res) => {
  const id = req.params.id;
  let source = Source.findById(id)
  .populate({path: 'articles', select: "author title description url urlToImage content"})
  .exec((err, posts) => {
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
