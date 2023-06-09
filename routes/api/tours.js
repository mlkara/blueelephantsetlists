const express = require('express');
const router = express.Router();
const toursCtrl = require('../../controllers/api/tours');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.post('/artist/:aid/venue/:vid', toursCtrl.create)

module.exports = router;