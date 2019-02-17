"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.topStoryCache = topStoryCache;
exports.sourceCache = sourceCache;

var _config = require("../config/config");

function topStoryCache(req, res, next) {
  _config.client.get("topStories", (err, data) => {
    if (err) throw err;
    console.log(data, "in cache function");

    if (data) {
      console.log(data);
      res.status(200).send(data);
    } else {
      next();
    }
  });
}

function sourceCache(req, res, next) {
  _config.client.get("sources", (err, data) => {
    if (err || !data) {
      next();
    } else if (data) {
      res.status(200).send(data);
    }
  });
} // class Redis {
//   constructor(){
//     this.client = redis.createClient();
//   }
//
//   sourceCache = () => {
//
//   }
//
//
// }
//# sourceMappingURL=index.js.map