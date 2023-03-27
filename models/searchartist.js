const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchartistSchema = new Schema({
    "artist": [
        {
        //   "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
        //   "tmid": 735610,
          "name": "The Beatles",
          "sortName": "Beatles, The",
          "disambiguation": "John, Paul, George and Ringo",
          "url": "https://www.setlist.fm/setlists/the-beatles-23d6a88b.html"
        },
        {
        //   "mbid": "...",
        //   "tmid": 12345,
          "name": "...",
          "sortName": "...",
          "disambiguation": "...",
          "url": "..."
        }
      ],
      "total": 42,
      "page": 1,
      "itemsPerPage": 20
}, {
  timestamps: true,
});

module.exports = mongoose.model('Searchartist', searchartistSchema);