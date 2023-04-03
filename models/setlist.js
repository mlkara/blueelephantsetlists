const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setlistSchema = new Schema({
    set: [],
    artist: {type: Schema.Types.ObjectId, ref: 'Artist'},
    venue: {type: Schema.Types.ObjectId, ref: 'Venue'}, 
    eventDate: Date,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Setlist', setlistSchema);