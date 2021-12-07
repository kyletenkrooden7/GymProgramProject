const request = require('request');
const apiOptions = { 
server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
apiOptions.server = 'https://intense-ocean-11035.herokuapp.com/'; 
}

const _renderLoginPage = function(req, res, responseBody){
  res.render('loginPage', { title: 'SWIFTYACTIVE'});
};

const login = function(req,res){
  const path = '/api/login'; 
  const requestOptions = { 
    url : apiOptions.server + path, 
    method : 'GET', 
    json : {} 
}; 

  request(requestOptions, (err, response, body) => {
    _renderLoginPage(req, res, body); 
  });
}

//Code refactored from software tools project
/*const verifyLogin = function(req,res) {
  var email = req.body.email;
  var password = req.body.password;

  client.connect(err => {
      const collection = client.db("GymProgramProject").collection("users");

      let results = collection.findOne({email: email, pword: password});
      results.then(function(value){
          if(value){
              let string = ("<script> sessionStorage.setItem('email','"+email+"');sessionStorage.setItem('password','"+password+"');");
              if(value.option==1)
                  string = string + "window.location.href='/loseweight';</script>";
              else if(value.option==2)
                  string = string + "window.location.href='/buildmuscle';</script>";
              else
                  string = string + "window.location.href='/generalHealth';</script>";
                  
              res.send(string); 
          }
              
          else{
              res.render('login', {
                  errortxt: 'Your credentials do not match an account in our system. Please try again.',
                  title: 'Log in'
              });
          }
      });
  });
}*/


/* GET 'Register' page */
const register = function(req, res){
  res.render('register', { title: 'SWIFTYACTIVE' });
};

module.exports = {
 // verifyLogin,
  login,
  register
};