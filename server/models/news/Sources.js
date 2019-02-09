import mongoose, { Schema } from 'mongoose';
import { SourceClass } from '../classes'
const { Types: {ObjectId} } = Schema


const SourceSchema = new Schema({
  givenID: {
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
  category: { type: ObjectId, ref: 'Category'},
  articles: [{type: ObjectId, ref: 'Article'}],
  users: [{type: ObjectId, ref: 'Users'}]

});


SourceSchema.loadClass(SourceClass)
const Source = mongoose.model('Source', SourceSchema);
// console.log(Source)
export default Source
