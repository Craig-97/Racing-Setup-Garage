'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Game = new Schema(
  {
    name: {
      type: String,
      required: 'Game name required'
    },
    platform: {
      type: [String],
      enum: ['PC', 'Playstation', 'Xbox'],
      required: 'Game platform required'
    },
    imageURL: {
      type: String
    },
    developer: {
      type: String
    },
    releaseDate: {
      type: Date
    },
    cars: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Car'
        }
      ]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Game', Game);
