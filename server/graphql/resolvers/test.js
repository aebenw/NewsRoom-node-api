const resolvers = {
  Query:{
    hello: () => "hello world",
    sources: async(_, __, { dataSources }) => {
      let sources = await dataSources.newsAPI.getSources()
      return sources
    },
    latestArticles: async(_, __, { dataSources }) => {
      let articles = await dataSources.newsAPI.getLatestArticles()
      return articles
    }
  }
};

export default resolvers
