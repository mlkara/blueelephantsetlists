const express = require('express');
const router = express.Router();
const venuesCtrl = require('../../controllers/api/venues');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post("/", venuesCtrl.create) 

module.exports = router;