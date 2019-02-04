import mongoose, { Schema } from 'mongoose';
const { Types: { ObjectId } } = Schema

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
    type: ObjectId,
    ref: 'Articles'
  }],
  sources: [{
    type: ObjectId,
    ref: 'Sources'
  }],
  comments: [{
    type: ObjectId,
    ref: 'Comment'
  }]
});

const User = mongoose.model('User', UserSchema);

export default User;
