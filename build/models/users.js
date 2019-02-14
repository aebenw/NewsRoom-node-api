"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _validator = _interopRequireDefault(require("validator"));

var _classes = require("./classes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const {
  Types: {
    ObjectId
  }
} = _mongoose.Schema;
const UserSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate: {
      validator: _validator.default.isEmail,
      message: `{VALUE} is not a valid email`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: [5, 'password length too short']
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }],
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
UserSchema.loadClass(_classes.UserClass);

const User = _mongoose.default.model('User', UserSchema);

var _default = User;
exports.default = _default;
//# sourceMappingURL=users.js.map