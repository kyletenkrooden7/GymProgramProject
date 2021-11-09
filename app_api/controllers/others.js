const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');

const userReadOne = function (req, res) {res
.status(200)
.json({"status" : "success"});
};

const userSignUpOne = function (req, res) {res
.status(200)
.json({"status" : "success"});
};

const userCreateOne = function (req, res) {res
.status(200)
.json({"status" : "success"});
};

module.exports = {
userReadOne,
userSignUpOne,
userCreateOne
};

/*
Workout
	.findById(req.params.workoutid) 
	.exec((err, workout) => { 
		res 
			.status(200) 
			.json(workout); 
	});*/