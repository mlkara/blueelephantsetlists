const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchSchema = new Schema({
  "setlist": [
    {
      "artist": {
        // "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
        // "tmid": 735610,
        "name": "The Beatles",
        "sortName": "Beatles, The",
        "disambiguation": "John, Paul, George and Ringo",
        "url": "https://www.setlist.fm/setlists/the-beatles-23d6a88b.html"
      },
      "venue": {
        "city": {},
        "url": "https://www.setlist.fm/venue/compaq-center-san-jose-ca-usa-6bd6ca6e.html",
        "id": "6bd6ca6e",
        "name": "Compaq Center"
      },
      "tour": {
        "name": "North American Tour 1964"
      },
      "set": [
        {
          "name": "...",
          "encore": 12345,
          "song": [
            {},
            {}
          ]
        },
        {
          "name": "...",
          "encore": 12345,
          "song": [
            {},
            {}
          ]
        }
      ],
      "info": "Recorded and published as 'The Beatles at the Hollywood Bowl'",
      "url": "https://www.setlist.fm/setlist/the-beatles/1964/hollywood-bowl-hollywood-ca-63de4613.html",
      "id": "63de4613",
      "versionId": "7be1aaa0",
      "eventDate": "23-08-1964",
      "lastUpdated": "2013-10-20T05:18:08.000+0000"
    },
    {
      "artist": {
        // "mbid": "...",
        // "tmid": 12345,
        "name": "...",
        "sortName": "...",
        "disambiguation": "...",
        "url": "..."
      },
      "venue": {
        "city": {},
        "url": "...",
        "id": "...",
        "name": "..."
      },
      "tour": {
        "name": "..."
      },
      "set": [
        {
          "name": "...",
          "encore": 12345,
          "song": [
            {},
            {}
          ]
        },
        {
          "name": "...",
          "encore": 12345,
          "song": [
            {},
            {}
          ]
        }
      ],
      "info": "...",
      "url": "...",
      "id": "...",
      "versionId": "...",
      "eventDate": "...",
      "lastUpdated": "..."
    }
  ],
  "total": 42,
  "page": 1,
  "itemsPerPage": 20
}, {
  timestamps: true,
});

module.exports = mongoose.model('Searchsetlist', searchsetlistSchema);