var mongoose  = require('mongoose'),
    Challenge = require('./challenge')

var pictureSchema = new mongoose.Schema({
  url: {type: String, default: ""},
  description: {type: String, default: ""},
  challenge_id: {type: mongoose.Schema.ObjectId, ref: 'Challenge'}
})

var Picture = mongoose.model('Picture', pictureSchema)

module.exports = Picture
