const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

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

const Article = mongoose.model('Article', ArticleSchema);



module.exports = {Article};
