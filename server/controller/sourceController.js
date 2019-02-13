import NewsAPI from 'newsapi';
const newsapi = new NewsAPI(API);
import { API } from '../constants/api';
import { Source }  from '../models';
import { asyncMapping } from './connectingFuncs'
import { client } from '../server'


export const callSources = async (req, res) => {

  let response = await newsapi.v2.sources({
    language: 'en',
    country: 'us',
    category: "general"
  })
  // console.log(req, res)
  // debugger
  let answer = await asyncMapping(response.sources, Source.findOrCreateWithCat)

  let cachedSources = JSON.stringify(answer)
  client.set('sources', cachedSources)

  res.status(200).send(answer)


};

export const showSource = (req, res) => {
  const id = req.params.id;
  // console.log(req.session.key)
  let source = Source.findById(id)
  source
  .populate({path: 'articles', select: "author title description url urlToImage content"})
  .exec((err, posts) => {
    res.status(200).send(JSON.stringify(posts, undefined, 2));
  });
}


export const searchSources = async (req, res) => {
  let sources = await Source.find({id: req.body.source})
  client.hgetall(req.body.source, (err, obj) => {
    console.log(obj)
    res.status(200).send(obj)

  })
}
