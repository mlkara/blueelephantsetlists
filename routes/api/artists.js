const express = require('express');
const router = express.Router();
const artistsCtrl = require('../../controllers/api/artists');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.post("/", artistsCtrl.create) 


module.exports = router;