const express = require('express');
const router = express.Router();
const userExperienceCtrl = require('../../controllers/api/userexperience');
const setlistApiCtrl = require('../../controllers/api/setlistApi');

router.get("/artists", setlistApiCtrl.findArtists)
router.get("/artist/:mbid/setlists", setlistApiCtrl.getArtistSetlists)

module.exports = router;