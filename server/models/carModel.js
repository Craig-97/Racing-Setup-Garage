'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Car = new Schema(
  {
    name: {
      type: String,
      required: 'Car name (name) required'
    },
    engine: {
      type: String
    },
    weight: {
      type: Number
    },
    transmission: {
      type: String
    },
    category: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Car', Car);
