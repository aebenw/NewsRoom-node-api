"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _classes = require("../classes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const {
  Types: {
    ObjectId
  }
} = _mongoose.Schema;
const ArticleSchema = new _mongoose.Schema({
  author: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  url: {
    type: String
  },
  urlToImage: {
    type: String
  },
  content: {
    type: String
  },
  source: {
    type: ObjectId,
    ref: 'Source'
  },
  users: [{
    type: ObjectId,
    ref: 'Users'
  }]
});
ArticleSchema.loadClass(_classes.ArticleClass);

const Article = _mongoose.default.model('Article', ArticleSchema);

var _default = Article;
exports.default = _default;
//# sourceMappingURL=Articles.js.map