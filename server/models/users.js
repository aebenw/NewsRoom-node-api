const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

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
  articles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Articles'
  }],
  sources: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sources'
  }]
});

const User = mongoose.model('User', UserSchema);

export default User;
