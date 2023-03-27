const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/tours');

router.get('/', toursCtrl.index);
router.get('/:id', toursCtrl.show);

module.exports = router;