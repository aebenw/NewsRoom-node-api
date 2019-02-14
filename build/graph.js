"use strict";

var _apolloServer = require("apollo-server");

var _graphql = require("./graphql");

var _newsAPI = _interopRequireDefault(require("./graphql/dataSources/newsAPI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Testing out Apollo, seeing if there's a good integration for it
// Hope to build a server and choose between normal API or Apollo
const server = new _apolloServer.ApolloServer({
  typeDefs: _graphql.typeDefs,
  resolvers: _graphql.resolvers,
  dataSources: () => ({
    newsAPI: new _newsAPI.default()
  })
});
server.listen().then(({
  url
}) => {
  console.log(`Apollo Running on ${url}`);
});
module.exports = server;
//# sourceMappingURL=graph.js.map