//THE PROBLEM:
//the data returned by the dev.battlenet RESTapi is different depending on the
//query, and such results need to be parsed and rendered differently.
//
//FLOW:
// A user can GET the blizzard page, and a be redirected OR a user can
// POST and receive a JSON response for single page apps

//post emxample --> blizz[req.gamename][req.category](opts)

var b = battlenet = require('../../midware/battlenet-api/battlenet.js')

module.exports = function(app) {
  app.get('/q/:gamename/:category/:query', __getQ, function(req, res) {
    res.render('blizz')
  })
  app.post('/q', __postQ)
}

function __getQ(req, res, next) {
  if(!(req.params.gamename == 'wow' || 'sc2' || 'dblo')) {
    res.send('Error, the gamename parameter and category are required\n')
  }else{
    console.log(req.params)
    var param = req.params
    var gamename = param.gamename
    var method = param.category
    var options = param.query
    b[gamename][method](options).then(function(result){
      console.log(result)
      res.render('atrium', result)
    })
  }
  res.end()
}

function __postQ(req, res, next) {
  if(!req.body.gamename) {
    res.send('Error: the gamename and category parameter are required in payload\n')
  }else{
    var opts = req.body
    var game = opts.gamename
    var category = opts.category
    blizz[game][category](opts).then(function (result) {
      console.log(result)
      res.send(result)
    })
  }
}
