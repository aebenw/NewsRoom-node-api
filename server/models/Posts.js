const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');

const Post = mongoose.model('Post', {
  content: {
    type: String
  },
  user: {
    type: ObjectID,
    ref: 'User'
  }
});

module.exports = {Post};
