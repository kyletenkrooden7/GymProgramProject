const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');

/*const _buildWorkout = function(req, res, results) {
  let workout = [];
  results.forEach((doc) => {
    workout.push({
    imageLocation: doc.imageLocation,
    clickMe: doc.clickMe,
    nameCol: doc.nameCol,
    warmUpCol: doc.warmUpCol,
    setsCol: doc.setsCol,
    repsCol: doc.repsCol, 
    repMaxCol: doc.repMaxCol,
    restCol: doc.restCol,
    demoCol:doc.demoCol,
    name:doc.name,
    warmUpSets: doc.warmUpSets,
    sets: doc.sets,
    reps: doc.reps,
    repMax: doc.repMax,
    rest: doc.rest,
    demo: doc.demo,
    _id: doc._id
    });
  });
  return workout;
};

const workoutByName = function (req, res) {
  const name = req.query.name;
  const point = {
    type: "Point",
    exercises: [name]
  };
  const geoOptions = {
    spherical: true,
    maxDistance: 20000,
    num: 10
  };
  if (!name) {
    console.log('ExerciseByName missing params');
    res
      .status(404)
      .json({
        message : 'name query parameter is required'
      });
    return;
  }
  Loc.aggregate(
  [
	{
		'$geoNear': {
                    'near': point,
                    'spherical': true,
                }
            }
        ],
		function(err, results){
			console.log(results);
			const workout = _buildWorkout(req, res, results);
			console.log('Results', results);
			res
			.status(200)
			.json(workout);
			}
	  )
};

*/

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
  }, (err, workout) => { 
  if (err) {
    res
    .status(400)
    .json(err);
  } else {
  res
    .status(201)
    .json(workout);
  }
  });
};



const workoutReadOne = function (req, res) { 
 // if (req.params && req.params.workoutid) {  
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
//  } else {		
  //  res		
   //   .status(404) 	
   //   .json({	
    //    "message": "No workoutid in request"
    //  });		
  //}
};


module.exports = {
  //workoutByName,
  workoutCreateOne,
  workoutReadOne
};

