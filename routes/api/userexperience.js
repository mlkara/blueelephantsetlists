const express = require('express');
const router = express.Router();
const userExperienceCtrl = require('../../controllers/api/userExperience');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', userExperienceCtrl.create);
router.get('/', userExperienceCtrl.getAllUserExperiences)

module.exports = router;