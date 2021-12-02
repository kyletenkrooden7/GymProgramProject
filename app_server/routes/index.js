const express = require('express');
const router = express.Router();
const ctrlOthers = require('../controllers/others');
const ctrlWorkouts = require('../controllers/workouts');

/* All pages */

router.get('/', ctrlOthers.login);
router.get('/register', ctrlOthers.register);
router.get('/general', ctrlWorkouts.general);
router.get('/buildMuscle', ctrlWorkouts.buildMuscle);
router.get('/loseWeight', ctrlWorkouts.loseWeight);
router.get('/workouts/:workoutid', ctrlWorkouts.WorkoutInfo);

module.exports = router;
