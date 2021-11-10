const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');

const workoutCreateOne = function (req, res) { 
Workout.create({ 
    imageLocation: req.body.imageLocation,
    clickMe: req.body.clickMe,
    nameCol: req.body.nameCol,
    warmUpCol: req.body.warmUpCol,
    setsCol: req.body.setsCol,
    repsCol: req.body.repsCol, 
    repMaxCol: req.body.repMaxCol,
    restCol: req.body.restCol,
    demoCol: req.body.demoCol,
    name: req.body.name,
    warmUpSets: req.body.warmUpSets,
    sets: req.body.sets,
    reps: req.body.reps,
    repMax: req.body.repMax,
    rest: req.body.rest,
    demo: req.body.demo
  }, (err, location) => { 
  if (err) {
    res
    .status(400)
    .json(err);
  } else {
  res
    .status(201)
    .json(location);
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


module.exports = {
  workoutCreateOne,
  workoutReadOne
};

