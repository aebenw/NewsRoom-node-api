import NewsAPI from 'newsapi';
const newsapi = new NewsAPI(process.env.NEWS_API);
// import { client } from '../server'
import { Article } from '../models'
import { asyncMapping }  from './connectingFuncs'

export const callArticles = async (req, res) => {
  let articles = await newsapi.v2.topHeadlines({
    language: 'en',
    country: 'us',
    category: "general",
  })

  let response = await asyncMapping(articles.articles, Article.findOrCreateWithSource)

  res.status(200).send(response)

  // Redis Caching for top stories, not ready for production
  // let cachedArticles = response.map(article => JSON.stringify(article))
  // client.lpush('topStories', cachedArticles)
  // let mostRecent = []
  // for(let i = 0; i < 6; i++){
  //   console.log(response[i]._doc.title)
  //   client.lpush('mostRecent', response[i].title)
  // }
}

export const showArticle = async (req, res) => {
  const id = req.params.id;
  let article = await Article.findById(id).populate('source', 'name')
  res.status(200).send(JSON.stringify(article, undefined, 2));
}
