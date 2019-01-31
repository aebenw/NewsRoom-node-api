const mongoose = require('mongoose');
// const mongo =
const Schema = mongoose.Schema;
// const ObjectID =
var ObjectId = mongoose.Schema.Types.ObjectId;


const SourceSchema = new Schema({
  // _id: {
  //   type: new ObjectId()
  // },
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
  articles: [{type: ObjectId, ref: 'Article'}]
});

const Source = mongoose.model('Source', SourceSchema);

module.exports = {Source};
