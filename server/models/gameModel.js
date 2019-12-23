'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Game = new Schema(
  {
    name: {
      type: String,
      required: 'Game name (name) required'
    },
    platform: {
      type: String,
      enum: ['Xbox', 'Playstation', 'PC', 'Other']
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Game', Game);
