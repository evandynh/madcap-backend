var mongoose  = require('mongoose'),
    Picture   = require('./user')

var Challenge = new mongoose.Schema({
  title: String,
  points: Number
});

var Challenge = mongoose.model('Challenge', Challenge)

module.exports = Challenge
