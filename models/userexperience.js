const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  url: {type: String, required: true},
  title: String
}, {
  timestamps: true,
});

const userexperienceSchema = new Schema({
    mbid: {
      type: String,
      required: true
    },
    tmid: {
      type: Number,
      required: true
    },
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
    images:[photoSchema]
}, {
  timestamps: true,
});

module.exports = mongoose.model('Userexperience', userexperienceSchema);