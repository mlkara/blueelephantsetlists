const express = require('express');
const router = express.Router();
const tours = require('../../controllers/api/tours');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


module.exports = router;