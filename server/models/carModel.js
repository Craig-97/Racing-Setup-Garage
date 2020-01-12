'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Car = new Schema(
  {
    name: {
      type: String,
      required: 'Car name required'
    },
    game: {
      type: Schema.Types.ObjectId,
      ref: 'Game',
      required: 'Game ID required'
    },
    engine: {
      type: String
    },
    horsepower: {
      type: Number
    },
    weight: {
      type: Number
    },
    transmission: {
      type: String
    },
    category: {
      type: String
    },
    imageURL: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Car', Car);
