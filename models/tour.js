const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  url: {type: String, required: true},
  title: String
}, {
  timestamps: true,
});

const tourSchema = new Schema({

    artist: {type: Schema.Types.ObjectId, ref: 'Artist'},
    venues: [{type: Schema.Types.ObjectId, ref: 'Venue'}],
    name: {
      type: String,
      required: true
    },

   
}, {
  timestamps: true,
});

module.exports = mongoose.model('Tour', tourSchema);