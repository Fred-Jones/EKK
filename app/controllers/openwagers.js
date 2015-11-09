var p = require('promise')
// make sure $.ajax() authenticates
//send all open wager games for each game
module.exports = function(app) {
  app.get('/og/:game', app.isAuthenticated, function(req, res, next) {
    res.send('openwagers.js')
  })
}
