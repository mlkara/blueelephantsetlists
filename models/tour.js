const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tourSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    artist: {type: Schema.Types.ObjectId, ref: 'Artist'},
    
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
      required: true
    },
    url: {
      type: String,
      required: true
    },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Tour', tourSchema);