import mongoose, { Schema } from 'mongoose';
import Source from './Sources'
const { Types: {ObjectId} } = Schema

const ArticleSchema = new Schema({
  author:{type: String},
  title: {type: String},
  description: {type: String},
  url: {type: String},
  urlToImage: {type: String},
  content: {type: String},
  source: {type: ObjectId, ref: 'Sources'},
  users: [{type: ObjectId, ref: 'Users'}]
});

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


ArticleSchema.loadClass(ArticleClass)
const Article = mongoose.model('Article', ArticleSchema);


export default Article;
