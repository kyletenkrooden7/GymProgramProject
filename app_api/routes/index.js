//All the routes we will use in the API
const express = require('express');
const router = express.Router();
const ctrlOthers = require('../controllers/others');
const ctrlWorkouts = require('../controllers/workouts');


//others
router
  .route('/')
  .get(ctrlOthers.userSignIn) //login page

router
  .route('/register')
  .post(ctrlOthers.userCreate); //registration page

  //workouts

router
  .route('/loseWeight')
  .get(ctrlWorkouts.LoseWorkoutPlan)
 

  router
  .route('/general')
  .get(ctrlWorkouts.GeneralWorkoutPlan)


  router
  .route('/buildMuscle')
  .get(ctrlWorkouts.BuildWorkoutPlan)
  

router
  .route('/workouts/:workoutid') 
  .get(ctrlWorkouts.workoutReadOne)
  
router
  .route('/workouts') 
  .post(ctrlWorkouts.workoutCreateOne)

module.exports = router;