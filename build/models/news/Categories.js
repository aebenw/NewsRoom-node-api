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
const CategorySchema = new _mongoose.Schema({
  name: {
    type: String
  },
  sources: [{
    type: ObjectId,
    ref: 'Sources'
  }],
  users: [{
    type: ObjectId,
    ref: 'Users'
  }]
});
CategorySchema.loadClass(_classes.CategoryClass);

const Category = _mongoose.default.model('Category', CategorySchema);

var _default = Category;
exports.default = _default;
//# sourceMappingURL=Categories.js.map