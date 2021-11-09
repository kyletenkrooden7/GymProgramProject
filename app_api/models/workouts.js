const mongoose = require('mongoose');

const exerciseHeadersSchema = new mongoose.Schema({
nameCol: {
type: String,
required: true,
},
warmUpCol: {
type: String,
required: true,
},
setsCol: {
type: String,
required: true,
},
repsCol: {
type: String,
required: true,
},
repMaxCol: {
type: String,
required: true,
},
restCol: {
type: String,
required: true,
},
demoCol: {
type: String,
required: true,
}
});
const exercisesSchema = new mongoose.Schema({
name: {
type: String,
required: true,
},
warmUpSets: {
type: Number,
required: true,
},
sets: {
type: Number,
required: true,
},
reps: {
type: Number,
required: true,
},
repMax: {
type: Number,
required: true,
},
rest: {
type: String,
required: true,
},
demo: {
type: String,
required: true,
}
});
const workoutTableSchema = new mongoose.Schema({
  imageLocation: {type: String, required: true},
  click: {type: String, required: true},
  exerciseHeaders: [exerciseHeadersSchema],
  exercises: [exercisesSchema]
});

mongoose.model('Workout', workoutTableSchema);
