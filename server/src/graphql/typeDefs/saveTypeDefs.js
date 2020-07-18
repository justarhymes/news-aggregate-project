import { gql } from 'apollo-server-express';

export default gql`
  type Save {
    title: String
    url: String
  }

  extend type Query {
    saves: [Save!]!
  }

  extend type Mutation {
    saveArticle(title: String!, url: String!): Save
    unsaveArticle(url: String!): Save
  }
`;
