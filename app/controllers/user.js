//Q: how to handle unauthed users -> /login
//   authed users -> (own_profile)?(private):(public)
//A:
//   /*insecure?*/
//   app.get('/user/:user', app.isAuthenticated, function(req, res, next) {
//     if(req.params.user == req.user) {
//      res.render('user_private')
//     }
//   })

var User = require('../models/user.js')
module.exports = function (app) {
  app.get('/user', app.isAuthenticated, function(req, res, next) {
    console.log('/user ', req.user)
    res.render('userprivate', req.user)
  })
  app.post('/user', function(req, res) {
    res.send('posted user')
  })
  app.get('/signup', function(req, res, next) {
    res.render('signup')
  })
  app.post('/signup', signup);
  //handle the case that a logged in user requests their own prof page
  app.get('/user/:user', function(req, res, next) {
    if(req.params.user == req.user.username) {
      res.redirect('/user')
    }else {
      res.render('userpublic', __getUserObject(req))
    }
  })
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
     console.log('User --', user, '\n', user.email, '\n', 'already exists')
     res.redirect('/signup')
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

function __getUserObject(r) {
  r = r.body.user
  return {
    username: r.username || 'error r.username',
    tagline: r.tagline || 'error r.username'
  }
}
