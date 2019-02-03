import mongoose, { Schema } from 'mongoose';
const { ObjectID } = require('mongodb');

const CommentSchema = new Schema({
  content: {
    type: String
  },
  user: {
    type: ObjectID,
    ref: 'Users'
  },
  article: {
    type: ObjectID,
    ref: 'Articles'
  }
});

const Comment = mongoose.model('Comment', CommentSchema)

export default Comment;
