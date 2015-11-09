module.exports = function(app) {
  app.get('/g/addgame', __isAdmin, function(req, res, next) {
    res.send('passed is admin')
  })
}
function __isAdmin(req, res, next) {
  next()
}
