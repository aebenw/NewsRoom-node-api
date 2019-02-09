// Just working with Apollo and testing it routes
// Hope to build a server and choose between normal API or Apollo

require('./config/config')
const express = require('express');
// const { mongoose } = require('./db/mongoose');
// const bodyParser = require('body-parser');
const cors = require('cors');
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './graphql'


// const routes = require('./routes/routes');

const app = express();
const server = new ApolloServer({ typeDefs, resolvers })
app.use(cors());

server.applyMiddleware({app})

// routes(app);


app.listen(3001, () => console.log(`started up on localhost:3001${server.graphqlPath}`));

module.exports = {app};
