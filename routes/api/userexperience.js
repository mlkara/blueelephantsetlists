const express = require('express');
const router = express.Router();
const userExperienceCtrl = require('../../controllers/api/userExperience');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, userExperienceCtrl.create);

module.exports = router;