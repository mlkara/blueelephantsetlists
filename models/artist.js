const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  mbid: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  sortName: {
    type: String,
    required: true
  },
  disambiguation: {
    type: String,

  },

}, {
  timestamps: true,
});

module.exports = mongoose.model('Artist', artistSchema);