import { Article, Source } from '../news'

class ArticleClass {

  static async findOrCreate(article){
    let {title, source: {id, name}} = article
    let source = await Source.findOne({id, name});
    delete article["source"]
    let foundArticle;
    foundArticle = await Article.findOne({title})
    if(!foundArticle){
      foundArticle = await Article.create(article)
      .then(doc => doc, (e) => e);
    }
    if(source && !foundArticle.source) {
        await source.addArticle(foundArticle);
        foundArticle.setSource(source);
    }
    return foundArticle
  }

  setSource(source){
      this.source = source;
      this.save().then(null, e => e)
  }

  addUser(user){
    this.users.push(user)
  }
}

export default ArticleClass
