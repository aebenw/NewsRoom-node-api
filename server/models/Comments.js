import mongoose, { Schema } from 'mongoose';
const { Types: {ObjectId} } = Schema

const CommentSchema = new Schema({
  content: {
    type: String
  },
  user: {
    type: ObjectId,
    ref: 'Users'
  },
  article: {
    type: ObjectId,
    ref: 'Articles'
  }
});

const Comment = mongoose.model('Comment', CommentSchema)

export default Comment;
