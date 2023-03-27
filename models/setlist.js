const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setlistSchema = new Schema({
    set: [],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Setlist', setlistSchema);