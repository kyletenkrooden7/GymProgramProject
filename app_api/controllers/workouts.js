const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');

const workoutCreateOne = function (req, res) { 
Workout.create({ 
    imageLocation: req.body.imageLocation,
    click: req.body.clickMe,
    exerciseHeaders: [{
    nameCol: req.body.nameCol,
    warmUpCol: req.body.warmUpCol,
    setsCol: req.body.setsCol,
    repsCol: req.body.repsCol, 
    repMaxCol: req.body.repMaxCol,
    restCol: req.body.restCol,
    demoCol: req.body.demoCol}],
    exercises: [{
    name: req.body.name,
    warmUpSets: req.body.warmUpSets,
    sets: req.body.sets,
    reps: req.body.reps,
    repMax: req.body.repMax,
    rest: req.body.rest,
    demo: req.body.demo}]
  }, (err, workout) => { 
  if (err) {
    res
    .status(400)
    .json(err);
  } else {
  res
    .status(201)
    .json({workout});
  }
  });
};


const workoutReadOne = function (req, res) { 
  if (req.params && req.params.workoutid) {  
    Workout
      .findById(req.params.workoutid)
      .exec((err, workout) => {
        if (!workout) {
          res	
            .status(404) 
            .json({	
              "message": "workoutid not found"
            });	 
          return;
        } else if (err) {
          res	
            .status(404) 
            .json(err); 
          return; 	
        }
        res		
          .status(200)
          .json(workout);
      });
  } else {		
    res		
      .status(404) 	
      .json({	
        "message": "No workoutid in request"
      });		
  }
};

const _buildWorkout = function(req, res, result) {
  let workouts = [];
  result.forEach((doc) => {
    workouts.push({
    imageLocation:doc.imageLocation,
    exerciseheaders: doc.exerciseHeaders,
    exercises: doc.exercises
    });
  });
  console.log(workouts)
  return workouts;
};

const workoutPlan = function (req, res) {
  Workout.aggregate(
    [
      {
        '$match':{
          imageLocation: {$exists:true} //loading all workouts
        }
      }
    ],
      function(err, results){
        const workouts = _buildWorkout(req, res, results);
        res
        .status(200)
        .json(workouts);
      }
    )
  };


module.exports = {
  workoutPlan,
  workoutCreateOne,
  workoutReadOne
};

