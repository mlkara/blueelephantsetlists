const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/setlists');

router.get('/', setlistsCtrl.index);
router.get('/new', setlistsCtrl.new);
router.get('/:id', setlistsCtrl.show);
router.get('/', filmsCtrl.create);


module.exports = router;