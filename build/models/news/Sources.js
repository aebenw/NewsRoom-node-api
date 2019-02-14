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
const SourceSchema = new _mongoose.Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  url: {
    type: String
  },
  img: {
    type: String
  },
  category: {
    type: ObjectId,
    ref: 'Category'
  },
  articles: [{
    type: ObjectId,
    ref: 'Article'
  }],
  users: [{
    type: ObjectId,
    ref: 'Users'
  }]
});
SourceSchema.loadClass(_classes.SourceClass);

const Source = _mongoose.default.model('Source', SourceSchema); // console.log(Source)


var _default = Source;
exports.default = _default;
//# sourceMappingURL=Sources.js.map