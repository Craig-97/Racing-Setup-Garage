'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Track = new Schema(
  {
    circuit: {
      type: String,
      required: 'Circuit name (circuit) required'
    },
    city: {
      type: String,
      required: 'City (city) required'
    },
    country: {
      type: String,
      required: 'Country (country) required'
    },
    length: {
      type: Number,
      default: 0
    },
    corners: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Track', Track);
