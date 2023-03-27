const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    // "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
    // "tmid": 735610,
    "name": "The Beatles",
    "sortName": "Beatles, The",
    "disambiguation": "John, Paul, George and Ringo",
    "url": "https://www.setlist.fm/setlists/the-beatles-23d6a88b.html"
}, {
  timestamps: true,
});

module.exports = mongoose.model('Artist', artistSchema);