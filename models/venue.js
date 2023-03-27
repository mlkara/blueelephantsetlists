const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const venueSchema = new Schema({
    setlistApiVenueId: {
      type: Number,
      required: true
    },
    cityName: {
      type: String,
      required: true
    },
    venueName: {
      type: String,
      required: true
    },
    stateCode: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    countryName: {
      type: String,
      required: true
    },
    coords: {
      long: Number,
      lat: Number
    },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Venue', venueSchema);