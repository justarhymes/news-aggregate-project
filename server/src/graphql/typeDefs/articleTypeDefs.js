import { gql } from 'apollo-server-express';

export default gql`
  type Article {
    title: String
    source: Source
    description: String
    url: String
    image: String
    publishedAt: String
    content: String
    isSaved: Boolean!
  }

  type Source {
    id: String
    name: String
  }

  extend type Query {
    articles: [Article!]!
  }
`;
