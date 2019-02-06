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
  }
`;

export default typeDefs
