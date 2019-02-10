import NewsAPI from 'newsapi';
const newsapi = new NewsAPI(API);
import { API } from '../constants/api';
import { Source }  from '../models';
import { asyncMapping } from './connectingFuncs'


export const callSources = async (req, res) => {
  let response = await newsapi.v2.sources({
    language: 'en',
    country: 'us',
    category: "general"
  })

  let answer = await asyncMapping(response.sources, Source.findOrCreateWithCat)
  console.log(answer)
  res.status(200).send(answer)


};

export const showSource = (req, res) => {
  const id = req.params.id;
  let source = Source.findById(id)
  source
  .populate({path: 'articles', select: "author title description url urlToImage content"})
  .exec((err, posts) => {
    res.status(200).send(JSON.stringify(posts, undefined, 2));
  });
}
