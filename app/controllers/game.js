var config = require('../../config/config.js')
var admin = config.app.admin
var User = require('./user.js')
var bc = require('bcryptjs')
module.exports = function(app) {
  app.get('/g/addgame', app.isAuthenticated, __isAdmin, function(req, res, next) {

    res.send('passed is admin')
  })
  app.post('/g/addgame', app.isAuthenticated, __isAdmin, function(req, res, next) {

  })
}

function __isAdmin(req, res, next) {
  User.findOne({username: req.user.username}, function(err, user) {
    if(!err){
        if(user.isadmin && bc.compareSync(req.user.password, user.password)){
          next()
        }else{
          res.redirect('/user')
        }
    }else{res.render('error', err)}
  })
}

function __addgame() {

}
