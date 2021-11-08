const express = require('express');
const router = express.Router();
const ctrlOthers = require('../controllers/others');

/* All pages */
router.get('/', ctrlOthers.login);
router.get('/register', ctrlOthers.register);
router.get('/general', ctrlOthers.general);
router.get('/buildMuscle', ctrlOthers.buildMuscle);
router.get('/loseWeight', ctrlOthers.loseWeight);

module.exports = router;
