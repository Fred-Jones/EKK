//move signup login currently found in user.js to here
var User = require('../models/user.js')
module.exports = function (app) {
  app.get('/signup', function (req, res) {
    res.render('signup')
  })
  app.post('/signup', signup)
}
function signup(req, res, next) {
  console.log(req.body.username)
  User.findOne({email: req.body.email}, function (err, user) {
   if(err) {
     throw new Error(err)
     res.render('error', err)
     return;
   }
   if(user) {
     var error_message = 'A user with that email already exists'
     console.log('User --', user, '\n', user.email, '\n', 'already exists')
     res.redirect('signup')
   }
   if(!err && !user) {
     console.log('New user')
     var newUser = new User({
       username: req.body.username,
       password: req.body.password,
       email: req.body.email,
       profile: req.body.profile || {
         tagline: req.body.tagline || 'enilgaT'
       }
     })
     newUser.save()
     res.redirect('/login')
   }

 })
}
