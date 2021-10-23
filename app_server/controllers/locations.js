/* GET 'login' page */
const login = function(req, res){
 res.render('loginPage', {
title: 'SwiFtyActive - Gym workout plans',
pageHeader: { 
title: 'SwiFtyActive', 
strapline: 'Get Started Today' 
} 
});
};

/* GET 'Register' page */
const register = function(req, res){
  res.render('register', { title: 'Register' });
};

/* GET 'Add generalHealth' page */
const general = function(req, res){
  res.render('GeneralHealth', { title: 'GeneralHealth', 
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
        warmUpSets: '3',
        sets: '3',
        reps: '12',
        repMax: '60%',
        rest: '2-3 min',
        demo: 'https://youtu.be/rT7DgCr-3pg'
    }, {
        name: 'Thrusters',
        warmUpSets: '3',
        sets: '3',
        reps: '10',
        repMax: '60%',
        rest: '2-3 min',
        demo: 'https://youtu.be/Zvt5-mugUco'
    }, {
        name: 'Jumping Squats',
        warmUpSets: '3',
        sets: '3',
        reps: '12',
        repMax: '60%',
        rest: '2-3 min',
        demo: 'https://youtu.be/A-cFYWvaHr0'
    }, {
        name: 'Pull Ups',
        warmUpSets: '3',
        sets: '3',
        reps: '10',
        repMax: '60%',
        rest: '2-3 min',
        demo: 'https://youtu.be/A-cFYWvaHr0'
    }, {        
        name: 'Mountain Climbers',
        warmUpSets: '3',
        sets: '3',
        reps: '10',
        repMax: '70%',
        rest: '1-2 min',
        demo: 'https://youtu.be/ZhiCSdOVJp0'
    }, {        
        name: 'Jumping Jacks',
        warmUpSets: '3',
        sets: '3',
        reps: '12',
        repMax: '60%',
        rest: '1-2 min',
        demo: 'https://youtu.be/1b98WrRrmUs'
    }]
  });
};


/* GET 'Add BuildMuscle' page */
const buildMuscle = function(req, res){
  res.render('BuildMuscle', { title: 'BuildMuscle' });
};

module.exports = {
  login,
  register,
  general,
  buildMuscle
};