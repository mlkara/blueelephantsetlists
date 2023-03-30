const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setlistSchema = new Schema({
    set: [],
    venue: {type: Schema.Types.ObjectId, ref: 'Venue'}, 
    eventDate: Date,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Setlist', setlistSchema);