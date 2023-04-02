const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/userExperiences/:id/reviews', reviewsCtrl.create);
router.get('/reviews/:id/edit', reviewsCtrl.edit);
router.delete('/reviews/:id', reviewsCtrl.delete);
router.put('/reviews/:id', reviewsCtrl.update);

module.exports = router;