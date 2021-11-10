const express = require('express');
const router = express.Router();
const ctrlOthers = require('../controllers/others');
const ctrlWorkouts = require('../controllers/workouts');

router
  .route('/login')
  .get(ctrlOthers.userReadOne)

router
  .route('/register')
  .get(ctrlOthers.userReadOne)
  .post(ctrlOthers.userCreateOne);
  //.get(ctrlLocations.locationsReadOne)
  //.put(ctrlLocations.locationsUpdateOne)
  //.delete(ctrlLocations.locationsDeleteOne);
    
router
  .route('/workouts/:workoutid')
  .get(ctrlWorkouts.workoutReadOne)
  .post(ctrlWorkouts.workoutCreateOne);

/*router
  .route('/buildMuscle')
  .get(ctrlLocations.buidMuscle)
  
  router
  .route('/loseWeight')
  .get(ctrlLocations.loseWeight)*/
  
//router
 // .route('/locations/:locationid/reviews/:reviewid')
  //.get(ctrlReviews.reviewsReadOne)
  //.put(ctrlReviews.reviewsUpdateOne)
  //.delete(ctrlReviews.reviewsDeleteOne);

module.exports = router;