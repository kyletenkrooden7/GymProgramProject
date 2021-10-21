const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.login);
router.get('/register', ctrlLocations.register);
router.get('/general', ctrlLocations.general);
router.get('/buildMuscle', ctrlLocations.buildMuscle);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
