'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Setup = new Schema(
  {
    name: {
      type: String,
      required: 'Car name (name) required'
    },
    car: {
      type: Schema.Types.ObjectId,
      ref: 'Car',
      required: 'Car ID (car) required'
    },
    game: {
      type: Schema.Types.ObjectId,
      ref: 'Game',
      required: 'Game ID (game_id) required'
    },
    track: {
      type: Schema.Types.ObjectId,
      ref: 'Track',
      required: 'Track ID (track) required'
    },
    driver: {
      type: Schema.Types.ObjectId,
      ref: 'Driver',
      required: 'Driver ID (driver) required'
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
