import { Article, Source, Category } from '../news'

class ArticleClass {

  static async findOrCreate(data){
    let article = await this.findOne({title: data.title})
    if(!article){
      article = await this.create(data)
    }
    return article
  }

  static async findOrCreateWithSource(article){
    let { source: {id, name}} = article
    let source = await Source.findOne({id, name});
    delete article["source"]
    let articleDoc = await Article.findOrCreate(article);
    if(source && !articleDoc.source) {
        await source.addArticle(articleDoc);
        articleDoc.setSource(source);
    }
    return articleDoc
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
