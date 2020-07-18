"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SavedMutation = exports.SavedQuery = undefined;

var _savedModal = require("../models/savedModal");

const SavedQuery = {
  savedById: _savedModal.SavedTC.getResolver('findById'),
  savedByIds: _savedModal.SavedTC.getResolver('findByIds'),
  savedOne: _savedModal.SavedTC.getResolver('findOne'),
  savedMany: _savedModal.SavedTC.getResolver('findMany'),
  savedCount: _savedModal.SavedTC.getResolver('count'),
  savedConnection: _savedModal.SavedTC.getResolver('connection'),
  savedPagination: _savedModal.SavedTC.getResolver('pagination')
};
const SavedMutation = {
  savedCreateOne: _savedModal.SavedTC.getResolver('createOne'),
  savedCreateMany: _savedModal.SavedTC.getResolver('createMany'),
  savedUpdateById: _savedModal.SavedTC.getResolver('updateById'),
  savedUpdateOne: _savedModal.SavedTC.getResolver('updateOne'),
  savedUpdateMany: _savedModal.SavedTC.getResolver('updateMany'),
  savedRemoveById: _savedModal.SavedTC.getResolver('removeById'),
  savedRemoveOne: _savedModal.SavedTC.getResolver('removeOne'),
  savedRemoveMany: _savedModal.SavedTC.getResolver('removeMany')
};
exports.SavedQuery = SavedQuery;
exports.SavedMutation = SavedMutation;