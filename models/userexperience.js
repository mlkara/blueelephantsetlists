const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  url: {type: String, required: true},
  title: String
}, {
  timestamps: true,
});

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

const userExperienceSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'}, 
  artist: {type: Schema.Types.ObjectId, ref: 'Artist'}, 
  venue: {type: Schema.Types.ObjectId, ref: 'Venue'}, 
  setlist: {type: Schema.Types.ObjectId, ref: 'Setlist'}, 
  tour: {type: Schema.Types.ObjectId, ref: 'Tour'}, 
  images:[photoSchema],
  reviews: [reviewSchema],
}, {
  timestamps: true,
});

module.exports = mongoose.model('UserExperience', userExperienceSchema);