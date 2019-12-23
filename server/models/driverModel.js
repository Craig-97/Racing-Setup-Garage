'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Driver = new Schema(
  {
    first_name: {
      type: String,
      required: 'First name (first_name) required'
    },
    last_name: {
      type: String
    },
    gamertag: {
      type: String
    },
    region: {
      type: String,
      enum: [
        'Asia',
        'Europe',
        'Africa',
        'Oceania',
        'North America',
        'South America'
      ],
      required: 'Region (region) required'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Driver', Driver);
