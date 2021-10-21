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
  res.render('GeneralHealth', { title: 'GeneralHealth' });
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