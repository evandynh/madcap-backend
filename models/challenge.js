var mongoose  = require('mongoose')

var challengeSchema = new mongoose.Schema({
  title: {type: String, default: ""},
  description: {type: String, default: "Take a picture"},
  url: String,
  points: Number
});

var Challenge = mongoose.model('Challenge', challengeSchema)

module.exports = Challenge
