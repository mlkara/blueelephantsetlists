const express = require('express');
const router = express.Router();
const userexperienceCtrl = require('../../controllers/api/userexperience');
const setlistApiCtrl = require('../../controllers/api/setlistApi');

router.get("/artists", setlistApiCtrl.findArtists)

module.exports = router;