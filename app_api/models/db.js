const mongoose = require('mongoose');
const dbURI = "mongodb+srv://kyle:grr!3ytxbO66@cluster0.crfn3.mongodb.net/GymProgramProject?retryWrites=true&w=majority";

try { 
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
	);
}
catch (e) {
  console.log("could not connect");
}
require('./workouts');
require('./others')
