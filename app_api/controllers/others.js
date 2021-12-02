const mongoose = require('mongoose');

const userReadOne = function (req, res) {res
.status(200)
.json({"status" : "success"}); //returning json objects
};

const userSignUpOne = function (req, res) {res
.status(200)
.json({"status" : "success"});
};

const userCreateOne = function (req, res) {res
.status(200)
.json({"status" : "success"});
};

module.exports = {
userReadOne,
userSignUpOne,
userCreateOne
};
