"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Comment: true,
  User: true
};
Object.defineProperty(exports, "Comment", {
  enumerable: true,
  get: function () {
    return _Comments.default;
  }
});
Object.defineProperty(exports, "User", {
  enumerable: true,
  get: function () {
    return _users.default;
  }
});

var _news = require("./news");

Object.keys(_news).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _news[key];
    }
  });
});

var _Comments = _interopRequireDefault(require("./Comments"));

var _users = _interopRequireDefault(require("./users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map