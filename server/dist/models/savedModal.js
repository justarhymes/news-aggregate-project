"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SaveTC = exports.Save = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseTimestamp = require("mongoose-timestamp");

var _mongooseTimestamp2 = _interopRequireDefault(_mongooseTimestamp);

var _graphqlComposeMongoose = require("graphql-compose-mongoose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SaveSchema = new _mongoose.Schema({
  title: {
    type: String
  },
  url: {
    type: String
  }
});
SaveSchema.plugin(_mongooseTimestamp2.default);
SaveSchema.index({
  createdAt: 1,
  updatedAt: 1
});

const Save = exports.Save = _mongoose2.default.model('Save', SaveSchema);

const SaveTC = exports.SaveTC = (0, _graphqlComposeMongoose.composeWithMongoose)(Save);