"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "typeDefs", {
  enumerable: true,
  get: function () {
    return _schema.default;
  }
});
Object.defineProperty(exports, "resolvers", {
  enumerable: true,
  get: function () {
    return _test.default;
  }
});

var _schema = _interopRequireDefault(require("./schema"));

var _test = _interopRequireDefault(require("./resolvers/test"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map