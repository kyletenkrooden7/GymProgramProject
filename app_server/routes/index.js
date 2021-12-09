const express = require('express');
const router = express.Router();
const ctrlOthers = require('../controllers/others');
const ctrlWorkouts = require('../controllers/workouts');


/* All pages */

router.get('/login', ctrlOthers.login);
//router.post('/login', ctrlOthers.processLogin);
router.get('/', ctrlOthers.register);
//router.get('/general', ctrlWorkouts.generalWorkoutPage);
//router.get('/buildMuscle', ctrlWorkouts.buildWorkoutPage);
//router.get('/loseWeight', ctrlWorkouts.loseWorkoutPage); 
router.get('/general', ctrlWorkouts.general);
router.get('/buildMuscle', ctrlWorkouts.buildMuscle);
router.get('/loseWeight', ctrlWorkouts.loseWeight); 

module.exports = router;