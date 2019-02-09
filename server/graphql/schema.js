import { gql } from 'apollo-server-express'

// const typeDefs = gql`
//
// type Query {
//   sources: [Source]!
//   hello: String
// }
// `;

const typeDefs = gql`
  type Query {
    hello: String
    sources: [Source]
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

export default typeDefs
