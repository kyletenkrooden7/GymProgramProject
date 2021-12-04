const request = require('request');
const apiOptions = { 
server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
apiOptions.server = 'https://intense-ocean-11035.herokuapp.com/'; 
}

const loseWorkoutPage = function(req, res){
    const path = '/api/loseWeight'; 
    const requestOptions = { 
        url : apiOptions.server + path, 
        method : 'GET', 
        json : {}
    }; 
    request(requestOptions, (err, response, body) => { 
        _renderWorkoutPage(req, res, body); 
    });
};

const _renderWorkoutPage = (req, res, responseBody) => {
    res.render('workoutTemplate',{
        title: 'SWIFTYACTIVE',
        click: 'Click Me',
        workouts: responseBody.workouts
    });
};

const buildWorkoutPage = function(req, res){
    const path = '/api/buildMuscle'; 
    const requestOptions = { 
        url : apiOptions.server + path, 
        method : 'GET', 
        json : {}
    }; 
    request(requestOptions, (err, response, body) => { 
        _renderWorkoutPage(req, res, body); 
    });
};

const generalWorkoutPage = function(req, res){
    const path = '/api/general'; 
    const requestOptions = { 
        url : apiOptions.server + path, 
        method : 'GET', 
        json : {}
    }; 
    request(requestOptions, (err, response, body) => { 
        _renderWorkoutPage(req, res, body); 
    });
};
module.exports = {
loseWorkoutPage,
buildWorkoutPage,
generalWorkoutPage
};
