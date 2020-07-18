"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Save = exports.Query = undefined;

var _saveTypeDefs = require("./typeDefs/saveTypeDefs");

const Query = exports.Query = `
  type Query {
    saves: [Save]
  }
`;
const Save = exports.Save = _saveTypeDefs.typeDef;
/*const server = new ApolloServer({
  
  resolvers,
})*/