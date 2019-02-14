"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const {
  Types: {
    ObjectId
  }
} = _mongoose.Schema;
const CommentSchema = new _mongoose.Schema({
  content: {
    type: String
  },
  user: {
    type: ObjectId,
    ref: 'User'
  },
  article: {
    type: ObjectId,
    ref: 'Articles'
  }
}); //*****WORK ON MIDDLEWARE FOR AUTOMATIC POPULATION***//
// CommentSchema.post('find', async (doc) => {
//   console.log(doc, "________________")
//   await doc.populate({path: 'user', select: 'name'})
//   .execPopulate()
// })
// CommentSchema.pre('find',  () => {
//   console.log(this, "_________________")
//   this.populate({path: 'user', select: 'name'})
//   .execPopulate()
// })

const Comment = _mongoose.default.model('Comment', CommentSchema);

var _default = Comment;
exports.default = _default;
//# sourceMappingURL=Comments.js.map