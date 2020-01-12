'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Setup = new Schema(
  {
    name: {
      type: String,
      required: 'Car name required'
    },
    car: {
      type: Schema.Types.ObjectId,
      ref: 'Car',
      required: 'Car ID required'
    },
    game: {
      type: Schema.Types.ObjectId,
      ref: 'Game',
      required: 'Game ID required'
    },
    track: {
      type: Schema.Types.ObjectId,
      ref: 'Track',
      required: 'Track ID required'
    },
    driver: {
      type: Schema.Types.ObjectId,
      ref: 'Driver',
      required: 'Driver ID required'
    },
    downloadURL: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Setup', Setup);
