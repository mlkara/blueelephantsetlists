const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/venues');

router.get('/', venuesCtrl.index);
router.get('/:id', venuesCtrl.show);

module.exports = router;