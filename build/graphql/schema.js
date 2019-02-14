"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServerExpress = require("apollo-server-express");

const typeDefs = _apolloServerExpress.gql`
  type Query {
    hello: String
    sources: [Source],
    latestArticles: [Article]
  }

  type User {
    name: String
    email: String!
    password: String!
    articles: [Article]
    sources: [Source]
    comments: [Comment]
  }

  type Article {
    author: String
    title: String
    description: String
    url: String
    urlToImage: String
    content: String
    source: Source
    users: [User]
  }

  type Source {
    givenID: String
    name: String
    description: String
    url: String
    category: Category
    articles: [Article]
    users: [User]
  }

  type Category {
    name: String
    sources: [Source]
    users: [User]
  }

  type Comment {
    content: String
    user: User!
    article: Article!
  }
`;
var _default = typeDefs;
exports.default = _default;
//# sourceMappingURL=schema.js.map