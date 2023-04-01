// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const Artist = require('./models/artist');
const Photo = require('./models/photo');
const User = require('./models/user');
const Setlist = require('./models/setlist');
const Song = require('./models/song');
const Tour = require('./models/tour');
const UserExperience = require('./models/userExperience');
const Venue = require('./models/venue');


// Local variables will come in handy for holding retrieved documents
let user, artist, venue, tour, setlist;
let users, artists, venuess, tours, setlists;
let p;
