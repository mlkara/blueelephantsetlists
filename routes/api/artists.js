const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/artists');

router.get('/', artistsCtrl.index);
router.get('/:id', artistsCtrl.show);
route.get('/', artistsCtrl.create);
// route.get('/artist/{mbid}', artistsCtrl)

module.exports = router;