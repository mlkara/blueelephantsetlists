const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const venueSchema = new Schema({
  setlistApiVenueId: {
    type: String,
    required: true
  },
  cityName: {
    type: String,

  },
  venueName: {
    type: String,

  },
  stateCode: {
    type: String,

  },
  state: {
    type: String,

  },
  countryName: {
    type: String,

  },
  coords: {
    long: Number,
    lat: Number
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Venue', venueSchema);