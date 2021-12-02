//All the routes we will use in the API
const express = require('express');
const router = express.Router();
const ctrlOthers = require('../controllers/others');
const ctrlWorkouts = require('../controllers/workouts');


//others
router
  .route('/')
  .get(ctrlOthers.userReadOne) //login page

router
  .route('/register')
  .post(ctrlOthers.userCreateOne); //registration page

  //workouts

router
  .route('/workouts/')
  .post(ctrlWorkouts.workoutCreateOne)

router
  .route('/workouts/:workoutid')
  .get(ctrlWorkouts.workoutReadOne)


module.exports = router;