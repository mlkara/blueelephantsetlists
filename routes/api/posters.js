const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/posters');

router.get('/', postersCtrl.index);
router.get('/:id', postersCtrl.show);

module.exports = router;