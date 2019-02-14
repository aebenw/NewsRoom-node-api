"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const resolvers = {
  Query: {
    hello: () => "hello world",
    sources: async (_, __, {
      dataSources
    }) => {
      let sources = await dataSources.newsAPI.getSources();
      return sources;
    },
    latestArticles: async (_, __, {
      dataSources
    }) => {
      let articles = await dataSources.newsAPI.getLatestArticles();
      return articles;
    }
  }
};
var _default = resolvers;
exports.default = _default;
//# sourceMappingURL=test.js.map