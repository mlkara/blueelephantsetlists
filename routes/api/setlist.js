const express = require('express');
const router = express.Router();
const setlistsCtrl = require('../../controllers/api/setlists');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.post("/venue/:vid/artist/:aid", setlistsCtrl.create) 


module.exports = router;