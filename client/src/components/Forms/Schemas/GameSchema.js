import SimpleSchema from 'simpl-schema';
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';

let schema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name'
  },
  platform: {
    type: Array,
    label: 'Platform'
  },

  'platform.$': {
    type: String,
    allowedValues: ['PC', 'Playstation', 'Xbox'],
},
  imageURL: {
    type: String,
    optional: true,
    label: 'Image URL'
  },
  developer: {
    type: String,
    optional: true,
    label: 'Developer'
  },
  releaseDate: {
    type: Date,
    optional: true,
    label: 'Release Date',
    defaultValue: new Date('01/01/2020')
  }
});

export const GameSchema = new SimpleSchema2Bridge(schema)

