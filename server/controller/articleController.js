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

  let response = await asyncMapping(articles.articles, Article.findOrCreateWithSource)

  res.status(200).send(response)
}

export const showArticle = async (req, res) => {
  const id = req.params.id;
  let article = await Article.findById(id).populate('source', 'name')
  // article = await article.populate({path: 'Source', select: "name"})
  // article = await article.populate('source', 'name')
  res.status(200).send(JSON.stringify(article, undefined, 2));
}
