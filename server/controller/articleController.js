import NewsAPI from 'newsapi';
const newsapi = new NewsAPI(API);
import { API } from '../constants/api';
import { Article } from '../models'
import { asyncMapping }  from './connectingFuncs'

export const callArticles = async (req, res) => {
  let articles = await newsapi.v2.topHeadlines({
    language: 'en',
    country: 'us',
    category: "general"
  })

  let response = await asyncMapping(articles.articles, Article.findOrCreate)

  Promise.all(response).then(complete => {
    res.status(200).send(complete)
  })
}

export const showArticle = (req, res) => {
  const id = req.params.id;
  let article = Article.findById(id).then(doc => doc, e => e)
  article
  .populate({path: 'sources', select: "name"})
  .exec((err, article) => {
    res.status(200).send(JSON.stringify(article, undefined, 2));
  });
}
