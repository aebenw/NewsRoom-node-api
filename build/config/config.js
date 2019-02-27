"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = void 0;

var _redis = _interopRequireDefault(require("redis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

if (env === 'test') {
  process.env.MONGODB_URI = 'mongodb://localhost:27017/news-test';
} else if (env === 'graph') {
  process.env.MONGODB_URI = 'mongodb://localhost:27017/news-graph';
} else if (env === 'development') {
  process.env.MONGODB_URI = 'mongodb://localhost:27017/news';
} // configuring Redis for Heroku/Dev


let client;
exports.client = client;

if (process.env.REDISTOGO_URL) {
  const rtg = require("url").parse(process.env.REDISTOGO_URL);

  exports.client = client = _redis.default.createClient(rtg.port, rtg.hostname);
  client.auth(rtg.auth.split(":")[1]);
} else {
  exports.client = client = _redis.default.createClient();
}
//# sourceMappingURL=config.js.map