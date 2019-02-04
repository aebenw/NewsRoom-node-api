import mongoose, { Schema } from 'mongoose';
const { Types: { ObjectId } } = Schema

const Post = mongoose.model('Post', {
  content: {
    type: String
  },
  user: {
    type: ObjectId,
    ref: 'User'
  }
});

module.exports = {Post};
