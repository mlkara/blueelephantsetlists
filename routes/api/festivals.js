const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/festivals');

router.get('/', festivalsCtrl.index);
router.get('/:id', festivalsCtrl.show);

module.exports = router;