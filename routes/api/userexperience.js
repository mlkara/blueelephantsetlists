const express = require('express');
const router = express.Router();
const userExperienceCtrl = require('../../controllers/api/userExperience');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// router.post('/user/:uid/artist/:aid/venue/:vid/setlist/',userExperienceCtrl.create);
router.post('/', userExperienceCtrl.create);


module.exports = router;