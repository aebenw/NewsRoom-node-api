import NewsAPI from 'newsapi';
const newsapi = new NewsAPI(process.env.NEWS_API);
import { Source }  from '../models';
import { asyncMapping } from './connectingFuncs'
import { client } from '../config/config'


export const callSources = async (req, res) => {

  let response = await newsapi.v2.sources({
    language: 'en',
    country: 'us',
    category: "general"
  })

  let answer = await asyncMapping(response.sources, Source.findOrCreateWithCat)

  res.status(200).send(answer)

  // Redis Caching for news sources
  // a lot of work is done to fetch their sources
  // and to get their pictures


  let cachedSources = JSON.stringify(answer)
  client.set('sources', cachedSources)
};

export const showSource = (req, res) => {
  const id = req.params.id;
  let source = Source.findById(id)
  source
  .populate({path: 'articles', select: "author title description url urlToImage content"})
  .exec((err, posts) => {
    posts.articles.reverse()
    res.status(200).send(JSON.stringify(posts, undefined, 2));
  });
}


export const searchSources = async (req, res) => {
  let sources = await Source.find({id: req.body.source})
  client.hgetall(req.body.source, (err, obj) => {
    res.status(200).send(obj)
  })
}
