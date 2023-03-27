const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchartistSchema = new Schema({
    "venue": [
        {
          "city": {
            "id": "5357527",
            "name": "Hollywood",
            "stateCode": "CA",
            "state": "California",
            "coords": {},
            "country": {}
          },
          "url": "https://www.setlist.fm/venue/compaq-center-san-jose-ca-usa-6bd6ca6e.html",
          "id": "6bd6ca6e",
          "name": "Compaq Center"
        },
        {
          "city": {
            "id": "...",
            "name": "...",
            "stateCode": "...",
            "state": "...",
            "coords": {},
            "country": {}
          },
          "url": "...",
          "id": "...",
          "name": "..."
        }
      ],
      "total": 42,
      "page": 1,
      "itemsPerPage": 20
}, {
  timestamps: true,
});

module.exports = mongoose.model('Searchartist', searchartistSchema);