const request = require('request');
const apiOptions = { 
server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
apiOptions.server = 'https://intense-ocean-11035.herokuapp.com/'; 
}

 //GET 'login' page 
//const login = function(req, res){
//res.render('loginPage', { title: 'SWIFTYACTIVE'});
//};

const _renderLoginPage = function(req, res, responseBody){
  res.render('loginPage', { title: 'SWIFTYACTIVE'});
};

const login = function(req,res){
  const path = '/api'; 
  const requestOptions = { 
    url : apiOptions.server + path, 
    method : 'GET', 
    json : {} 
}; 

  request(requestOptions, (err, response, body) => {
    _renderLoginPage(req, res, body); 
  });
}


/* GET 'Register' page */
const register = function(req, res){
  res.render('register', { title: 'SWIFTYACTIVE' });
};

module.exports = {
  login,
  register
};