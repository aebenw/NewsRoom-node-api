const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    },
  email: {
    type: String,
    require: true,
    unique: true
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

const User = mongoose.model('User', UserSchema);

module.exports = {User};
