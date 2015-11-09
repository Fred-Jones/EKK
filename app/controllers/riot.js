var config = require('../../config/config.js').mid
var Promise = require('promise')
var rKey = config.riot.apikey
var Riot = require('../../midware/EQuery/index.js')
var r = new Riot(rKey)

module.exports = function(app) {
  app.get('/r/:route', app.isAuthenticated, function(req, res, next) {
    //var  q = r.query('http://google.com', function(err, response, body) {
    //   console.log(body)
    // })
    var p = new Promise(function(resolve, reject) {
      var q = r.query('http://google.com', function(err, stdout) {
        resolve(stdout)
      })
    })
    p.then(function(data) {
      res.send(data)
    })
  })
}
