const express = require('express');
const router = express.Router();
const ctrlOthers = require('../controllers/others');
const ctrlWorkouts = require('../controllers/workouts');


/* All pages */

router.get('/', ctrlOthers.login);
router.get('/register', ctrlOthers.register);
router.get('/general', ctrlWorkouts.generalWorkoutPage);
router.get('/buildMuscle', ctrlWorkouts.buildWorkoutPage);
router.get('/loseWeight', ctrlWorkouts.loseWorkoutPage); 

module.exports = router;