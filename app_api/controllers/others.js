const mongoose = require('mongoose');

const userSignIn = function (req, res) {res
.status(200)
.json({"status" : "success"}); //returning json objects
};

const userCreate = function (req, res) {res
.status(200)
.json({"status" : "success"});
};

module.exports = {
userSignIn,
userCreate
};
