import mongoose, { Schema } from 'mongoose';
import { ArticleClass } from '../classes'
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


ArticleSchema.loadClass(ArticleClass)
const Article = mongoose.model('Article', ArticleSchema);


export default Article;
