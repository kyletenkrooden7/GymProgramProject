const mongoose = require('mongoose');

const exerciseHeadersSchema = new mongoose.Schema({
nameCol: {
type: String,
required: false,
},
warmUpCol: {
type: String,
required: false,
},
setsCol: {
type: String,
required: false,
},
repsCol: {
type: String,
required: false,
},
repMaxCol: {
type: String,
required: false,
},
restCol: {
type: String,
required: false,
},
demoCol: {
type: String,
required: false,
}
});
const exercisesSchema = new mongoose.Schema({
name: {
type: String,
required: false,
},
warmUpSets: {
type: Number,
required: false,
},
sets: {
type: Number,
required: false,
},
reps: {
type: Number,
required: false,
},
repMax: {
type: Number,
required: false,
},
rest: {
type: String,
required: false,
},
demo: {
type: String,
required: false,
}
});
const workoutTableSchema = new mongoose.Schema({
  imageLocation: {type: String, required: false},
  click: {type: String, required: false},
  exerciseHeaders: [exerciseHeadersSchema],
  exercises: [exercisesSchema]
});

mongoose.model('Workout', workoutTableSchema);
