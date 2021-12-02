const request = require('request');
const apiOptions = { 
server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
apiOptions.server = 'https://intense-ocean-11035.herokuapp.com/'; 
}

 //GET 'login' page 
const login = function(req, res){
res.render('loginPage', { title: 'SWIFTYACTIVE'});
};

/* GET 'Register' page */
const register = function(req, res){
  res.render('register', { title: 'SWIFTYACTIVE' });
};



module.exports = {
  login,
  register
};