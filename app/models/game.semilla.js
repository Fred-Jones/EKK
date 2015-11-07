var Juego = require('./game.js')

module.exports = function (opts) {
  var id = opts.gameid
  Juego.findOne({gameid: id}, function (err, game) {
    if(!game && !err) {
      var semilla = new Juego(opts)
      semilla.save()
    }else if(err){
      throw new Error(err)
    }else{
      var msg = 'Game: ' + game + 'already exists!'
      console.log(msg)
      return msg
    }
  })

}
