"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloDatasourceRest = require("apollo-datasource-rest");

var _api = require("../../constants/api");

class NewsAPI extends _apolloDatasourceRest.RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://newsapi.org/v2/";
    this.key = `apiKey=${process.env.NEWS_API}`;
  }

  async getSources() {
    let response = await this.get(`sources?${this.key}`);
    return response.sources.map(source => this.sourceReducer(source));
  }

  async getLatestArticles() {
    let response = await this.get(`top-headlines?language=en&country=us&category=general&pageSize=5&` + `${this.key}`);
    return response.articles.map(article => this.articleReducer(article));
  }

  sourceReducer(source) {
    const {
      id,
      name,
      description,
      url
    } = source;
    return {
      givenID: id,
      name,
      description,
      url
    };
  }

  articleReducer(article) {
    const {
      title
    } = article;
    return {
      title
    };
  }

}

var _default = NewsAPI;
exports.default = _default;
//# sourceMappingURL=newsAPI.js.map