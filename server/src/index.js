import _ from 'lodash';
import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

import mongoose from 'mongoose';

import './utils/db';
import { Save, Article } from './graphql/schema';
import saveResolvers from './graphql/resolvers/saveResolvers';
import articleResolvers from './graphql/resolvers/articleResolvers';
import ArticleAPI from './graphql/datasources/articles';

const baseTypeDefs = gql`
  type Query
  type Mutation
`;

const dataSources = () => ({
  articleAPI: new ArticleAPI(),
});

dotenv.config();

const app = express();

const server = new ApolloServer({
  typeDefs: [baseTypeDefs, Save, Article],
  resolvers: _.merge({}, saveResolvers, articleResolvers),
  dataSources,
  cors: true,
  playground: process.env.NODE_ENV === 'development' ? true : false,
  introspection: true,
  tracing: true,
  path: '/',
});

server.applyMiddleware({
  app,
  path: '/',
  cors: true,
  onHealthCheck: () =>
    // eslint-disable-next-line no-undef
    new Promise((resolve, reject) => {
      if (mongoose.connection.readyState > 0) {
        resolve();
      } else {
        reject();
      }
    }),
});

app.listen({ port: process.env.PORT }, () => {
  console.log(`🚀 Server listening on port ${process.env.PORT}`);
  console.log(`😷 Health checks available at ${process.env.HEALTH_ENDPOINT}`);
});
