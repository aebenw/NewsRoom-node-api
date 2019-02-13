// Testing out Apollo, seeing if there's a good integration for it
// Hope to build a server and choose between normal API or Apollo

const express = require('express');
// const { mongoose } = require('./db/mongoose');

import { ApolloServer } from 'apollo-server'
import { typeDefs, resolvers } from './graphql'
import NewsAPI from './graphql/dataSources/newsAPI'


const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      newsAPI: new NewsAPI()
    })
  })

server.listen().then(({url}) => {
  console.log(`Apollo Running on ${url}`)
})


module.exports = server;
