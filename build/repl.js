"use strict";

var _repl = _interopRequireDefault(require("repl"));

var _server = require("./server");

var _models = require("./models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const replServer = _repl.default.start({
  prompt: "NewsRoom "
});

replServer.context.app = _server.app;
replServer.context.User = _models.User;
//# sourceMappingURL=repl.js.map