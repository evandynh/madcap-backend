var mongoose  = require('mongoose'),
    Challenge = require('./challenge')

var pictureSchema = new mongoose.Schema({
  url: String,
  description: String,
  challenge: {
    type: mongoose.Schema.ObjectId, ref: 'Challenge'
  }
})

var Picture = mongoose.model('Picture', pictureSchema)

module.exports = Picture
