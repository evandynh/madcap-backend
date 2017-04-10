var mongoose  = require('mongoose')

var challengeSchema = new mongoose.Schema({
  title: {type: String, default: ""},
  points: Number
});

var Challenge = mongoose.model('Challenge', challengeSchema)

module.exports = Challenge
