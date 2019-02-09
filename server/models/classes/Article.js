import { Article, Source, Category } from '../news'

class ArticleClass {

  static async findOrCreateWithSource(article){
    console.log(article)
    let { source: {id, name}} = article
    let source = await Source.findOne({givenID: id, name});
    delete article["source"]
    let articleDoc = Article.findOrCreate(article);

    if(source && !articleDoc.source) {
        await source.addArticle(articleDoc);
        articleDoc.setSource(source);
    }
    return articleDoc
  }

  static async findOrCreate(data){
    let article = await Article.findOne({title: data.title})
    if(!article){
      article = await Article.create(data)
    }
    return article
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
