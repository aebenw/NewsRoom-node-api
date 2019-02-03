const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;


const SourceSchema = new Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  url: {
    type: String
  },
  category:{
    type: String
  },
  articles: [{type: ObjectId, ref: 'Article'}],
  users: [{type: ObjectId, ref: 'Users'}]

});

class SourceClass{

  addArticle(article){
    this.articles.push(article);
    this.save().then(null, e => e)
  }

}

SourceSchema.loadClass(SourceClass)
const Source = mongoose.model('Source', SourceSchema);

export default Source
