import mongoose, { Schema } from 'mongoose';
import validator from 'validator'
const { Types: { ObjectId } } = Schema

const UserSchema = new Schema({
  name: {
    type: String,
    },
  email: {
    type: String,
    require: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: `{VALUE} is not a valid email`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: [5, 'password length too short']
  },
  // tokens: [{
  //   access: {
  //     type: String,
  //     required: true
  //   },
  //   token: {
  //     type: String,
  //     required: true
  //   }
  // }],
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
