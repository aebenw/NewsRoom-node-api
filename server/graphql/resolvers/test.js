const resolvers = {
  Query:{
    hello: () => "hello world",
    sources: async(_, __, { dataSources }) => {
      let sources = await dataSources.newsAPI.getSources()
      return sources
    }
  }
};

export default resolvers
