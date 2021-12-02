const request = require('request');
const apiOptions = { 
server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
apiOptions.server = 'https://intense-ocean-11035.herokuapp.com/'; 
}


const _renderWorkoutPage = (req, res, responseBody) => {
    res.render('workoutTemplate',{
        title: 'SWIFTYACTIVE',
        imageLocation: 'images/SWIFTYBANNER.jpg',
        click: 'Click Me',
        workouts: responseBody.workouts[0]
    });
};


const WorkoutPage = function(req, res){
    const path = '/api/workouts'; 
    const requestOptions = { 
        url : apiOptions.server + path, 
        method : 'GET', 
        json : {}
    }; 
    request(requestOptions, (err, response, body) => { 
        _renderWorkoutPage(req, res, body); 
    });
};


    
    


/*const getWorkoutPage = (req, res, callback) => {
const path = `/api/workouts/${req.params.workoutid}`;
const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {}
};
request(
requestOptions,
(err, {statusCode}, body) => {
const data = body;
callback(req,res,data);
}
);
};

const WorkoutPage = (req, res) => {
    getWorkoutPage(req, res,
      (req, res, responseData) => renderWorkoutPage(req, res, responseData)
    );
  };*/


/* GET 'Add generalHealth' page */
/*const general = function(req, res){
res.render('workoutTemplate', { title: 'SWIFTYACTIVE',
imageLocation: 'images/SWIFTYBANNER.jpg',
click: 'Click Me',
exerciseHeaders: [{
    nameCol: 'Exercise',
    warmUpCol: 'Warm-Up Sets',
    setsCol: 'Sets',
    repsCol: 'Reps',
    repMaxCol: '%1RM',
    restCol: 'Rest',
    demoCol: 'Demo'
}],
exercises: [{
        name: 'Barbell Bench Press',
        warmUpSets: 3,
        sets: 3,
        reps: 12,
        repMax: 60,
        rest: '2-3 min',
        demo: 'https://youtu.be/rT7DgCr-3pg'
    }, {
        name: 'Thrusters',
        warmUpSets: 3,
        sets: 3,
        reps: 10,
        repMax: 60,
        rest: '2-3 min',
        demo: 'https://youtu.be/Zvt5-mugUco'
    }, {
        name: 'Jumping Squats',
        warmUpSets: 3,
        sets: 3,
        reps: 12,
        repMax: 60,
        rest: '2-3 min',
        demo: 'https://youtu.be/A-cFYWvaHr0'
    }, {
        name: 'Pull Ups',
        warmUpSets: 3,
        sets: 3,
        reps: 10,
        repMax: 60,
        rest: '2-3 min',
        demo: 'https://youtu.be/A-cFYWvaHr0'
    }, {        
        name: 'Mountain Climbers',
        warmUpSets: 3,
        sets: 3,
        reps: 10,
        repMax: 70,
        rest: '1-2 min',
        demo: 'https://youtu.be/ZhiCSdOVJp0'
    }, {        
        name: 'Jumping Jacks',
        warmUpSets: 3,
        sets: 3,
        reps: 12,
        repMax: 60,
        rest: '1-2 min',
        demo: 'https://youtu.be/1b98WrRrmUs'
    }]
});
};
*/
/* GET 'Add BuildMuscle' page */
/*
const buildMuscle = function(req, res){
res.render('workoutTemplate', { title: 'SWIFTYACTIVE',
imageLocation: 'images/swiftyBannerBuildMuscle.jpg',
click: 'Click Me',
exerciseHeaders: [{
    nameCol: 'Exercise',
    warmUpCol: 'Warm-Up Sets',
    setsCol: 'Sets',
    repsCol: 'Reps',
    repMaxCol: '%1RM',
    restCol: 'Rest',
    demoCol: 'Demo'
}],
exercises: [{
        name: 'Barbell Bench Press',
        warmUpSets: 3,
        sets: 3,
        reps: 12,
        repMax: 60,
        rest: '2-3 min',
        demo: 'https://youtu.be/rT7DgCr-3pg'
    }, {
        name: 'Back Squat',
        warmUpSets: 3,
        sets: 3,
        reps: 10,
        repMax: 70,
        rest: '2-3 min',
        demo: 'https://youtu.be/Uv_DKDl7EjA'
    }, {
        name: 'Romanian Deadlift',
        warmUpSets: 3,
        sets: 3,
        reps: 10,
        repMax: 60,
        rest: '3-4 min',
        demo: 'https://youtu.be/JCXUYuzwNrM'
    }, {
        name: 'Pull Ups',
        warmUpSets: 3,
        sets: 3,
        reps: 10,
        repMax: 60,
        rest: '2-3 min',
        demo: 'https://youtu.be/A-cFYWvaHr0'
    }, {        
        name: 'DB Shoulder Press',
        warmUpSets: 3,
        sets: 3,
        reps: 10,
        repMax: 70,
        rest: '1-2 min',
        demo: 'https://youtu.be/qEwKCR5JCog'
    }, {        
        name: 'Bicep Curls',
        warmUpSets: 3,
        sets: 3,
        reps: 15,
        repMax: 60,
        rest: '1-2 min',
        demo: 'https://youtu.be/ykJmrZ5v0Oo'
    }]
});
};
*/
/* GET 'Add LoseWeight' page */
/*
const loseWeight = function(req, res){
res.render('workoutTemplate', { title: 'SWIFTYACTIVE',
imageLocation: 'images/swiftyBannerLoseWeight.jpg',
click: 'Click Me',
exerciseHeaders: [{
    nameCol: 'Exercise',
    warmUpCol: 'Warm-Up Sets',
    setsCol: 'Sets',
    repsCol: 'Reps',
    repMaxCol: '%1RM',
    restCol: 'Rest',
    demoCol: 'Demo'
}],
exercises: [{
        name: 'Push Ups',
        warmUpSets: 2,
        sets: 3,
        reps: 15,
        repMax: 60,
        rest: '1-2 min',
        demo: 'https://www.youtube.com/watch?v=IODxDxX7oi4'
    }, {
        name: 'Jumping Jacks',
        warmUpSets: 1,
        sets: 3,
        reps: 30,
        repMax: 60,
        rest: '1-2 min',
        demo: 'https://youtu.be/1b98WrRrmUs'
    }, {
        name: 'Russian Twists',
        warmUpSets: 1,
        sets: 3,
        reps: 20,
        repMax: 70,
        rest: '1-2 min',
        demo: 'https://youtu.be/wkD8rjkodUI'
    }, {
        name: 'Squat Thrusts',
        warmUpSets: 3,
        sets: 3,
        reps: 12,
        repMax: 65,
        rest: '1-2 min',
        demo: 'https://youtu.be/fysU2ldlXSY'
    }, {        
        name: 'Mountain Climbers',
        warmUpSets: 1,
        sets: 3,
        reps: 12,
        repMax: 40,
        rest: '1-2 min',
        demo: 'https://youtu.be/cnyTQDSE884'
    }, {        
        name: 'Bicep Curls',
        warmUpSets: 3,
        sets: 3,
        reps: 20,
        repMax: 40,
        rest: '1-2 min',
        demo: 'https://youtu.be/ykJmrZ5v0Oo'
    }]
});
};*/


module.exports = {
WorkoutPage
};
