const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/concerts');

router.get('/', concertsCtrl.index);
router.get('/:id', concertsCtrl.show);

module.exports = router;