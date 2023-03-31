const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  url: {type: String, required: true},
  title: String
}, {
  timestamps: true,
});

const userExperienceSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'}, 
  artist: {type: Schema.Types.ObjectId, ref: 'Artist'}, 
  venue: {type: Schema.Types.ObjectId, ref: 'Venue'}, 
  setlist: {type: Schema.Types.ObjectId, ref: 'Setlist'}, 
  eventDate: Date,
  images:[photoSchema]
}, {
  timestamps: true,
});

module.exports = mongoose.model('UserExperience', userExperienceSchema);