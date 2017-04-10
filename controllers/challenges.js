var Challenge = require('../models/Challenge')

function indexChallenge(req, res){
  Challenge.find({}, function(err, challenges){
    if(err) throw err
    res.json({challenges: challenges})
  })
}

function createChallenge(req, res){
  var challenge = new Challenge(req.body)
  challenge.save(function(err, challenge){
    if(err) throw err
    res.json({message: "Challenge successfully created!", challenge: challenge})
  })
}

function updateChallenge(req, res){
  var id = req.params.id

  Challenge.findById(id, function(err, challenge){
    if(err) throw err

    if(req.body.title) challenge.title = req.body.title
    if(req.body.points) challenge.points = req.body.points

    challenge.save(function(err){
      if(err) throw err
      res.json({message: "Challenge successfully updated", challenge: challenge})
    })
  })
}

function destroyChallenge(req, res){
  var id = req.params.id

  Challenge.remove({_id: id}, function(err){
    if(err) throw err
    res.json({message: "Challenge was successfully deleted!"})
  })
}

module.exports = {
  indexChallenge: indexChallenge,
  createChallenge: createChallenge,
  updateChallenge: updateChallenge,
  destroyChallenge: destroyChallenge
}
