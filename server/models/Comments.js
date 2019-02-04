import mongoose, { Schema } from 'mongoose';
const { Types: {ObjectId} } = Schema

const CommentSchema = new Schema({
  content: {
    type: String
  },
  user: {
    type: ObjectId,
    ref: 'User'
  },
  article: {
    type: ObjectId,
    ref: 'Articles'
  }
});

  //*****TRYING TO WORK ON MIDDLEWARE FOR AUTOMATIC POPULATION***//
// CommentSchema.post('find', async (doc) => {
//   console.log(doc, "________________")
//   await doc.populate({path: 'user', select: 'name'})
//   .execPopulate()
// })
// CommentSchema.pre('find',  () => {
//   console.log(this, "_________________")
//   this.populate({path: 'user', select: 'name'})
//   .execPopulate()
// })

const Comment = mongoose.model('Comment', CommentSchema)

export default Comment;
