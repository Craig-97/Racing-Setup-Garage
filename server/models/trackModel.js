'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Track = new Schema(
  {
    circuit: {
      type: String,
      required: 'Circuit name required'
    },
    city: {
      type: String,
      required: 'City required'
    },
    country: {
      type: String,
      required: 'Country required'
    },
    length: {
      type: Number,
      default: 0
    },
    corners: {
      type: Number,
      default: 0
    },
    game: {
      type: Schema.Types.ObjectId,
      ref: 'Game',
      required: 'Game ID required'
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Track', Track);
