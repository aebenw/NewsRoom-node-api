import { Article, Source } from '../news'

class ArticleClass {

  static async findOrCreate(data){
    let article = await this.findOne({title: data.title}).populate('source', 'name')
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
    articleDoc = await articleDoc.populate('source', 'name')
    return articleDoc
  }

  // setSource(source){
  //     this.source = source;
  //     this.save().then(null, e => e)
  // }
  setSource({_id, name}){
      this.source = {_id, name};
      this.save().then(null, e => e)
  }

  addUser(user){
    let foundUser = this.users.find(follower =>  follower.id === user.id)
    if(!foundUser){
      this.users.push(user)
    }
  }
}

export default ArticleClass
