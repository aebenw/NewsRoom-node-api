"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose.default.promise = global.Promise;

_mongoose.default.connect(process.env.MONGODB_URI);

const db = _mongoose.default.connection; // db.dropDatabase()
// db.dropCollection('sources')

db.on('error', err => console.log(err));
db.on('open', () => console.log(`success on ${process.port}`));
var _default = _mongoose.default;
exports.default = _default;
//# sourceMappingURL=mongoose.js.map