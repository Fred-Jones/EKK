
module.exports = function(app) {
    app.get('/login', function(req, res, next) {
      res.render('login')
    })
    app.post('/login', app.login, function (req, res) {
      console.log('redir /user', user)
      res.redirect('/user')
    })
    app.get('/logout', app.logout)
    app.get('/signout', app.logout)
};
