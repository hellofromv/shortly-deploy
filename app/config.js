var mongoose = require('mongoose');
//connect db
mongoose.connect('mongodb://localhost/shortly');

var db = mongoose.connection;

module.exports = db;
