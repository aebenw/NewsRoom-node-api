const mongoose = require('mongoose');
// const { ObjectID } = require('mongodb');

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }]
});

module.exports = {User};
