var Picture = require('../models/Picture')

function indexPicture(req, res){
  Picture.find({}, function(err, pictures){
    if(err) throw err
    res.json({pictures: pictures})
  })
}

function createPicture(req, res){
  var picture = new Picture(req.body)
  picture.save(function(err, picture){
    if(err) throw err
    res.json({message: "Picture successfully created!", picture: picture})
  })
}

function updatePicture(req, res){
  var id = req.params.id

  Picture.findById(id, function(err, picture){
    if(err) throw err

    if(req.body.description) picture.description = req.body.description

    picture.save(function(err){
      if(err) throw err
      res.json({message: "Picture successfully updated", picture: picture})
    })
  })
}

function destroyPicture(req, res){
  var id = req.params.id

  Picture.remove({_id: id}, function(err){
    if(err) throw err
    res.json({message: "Picture was successfully deleted!"})
  })
}

module.exports = {
  indexPicture: indexPicture,
  createPicture: createPicture,
  updatePicture: updatePicture,
  destroyPicture: destroyPicture
}
