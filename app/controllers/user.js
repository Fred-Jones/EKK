var User = require('../models/user.js')
var TEST_CARD = require('../../midware/payments/paypal/paypal.js')

module.exports = function (app) {
  app.get('/user', app.isAuthenticated, function(req, res, next) {
    var usr = req.user
    console.log('/user ', usr)
    res.render('userprivate', usr)
  })
  app.post('/user', function(req, res) {
    res.send('posted /user')
  })
//expects req.body.creditcard
  app.get('/user/addtestcard', app.isAuthenticated,
                            __addNewCard,
                          function(req,res) {
                            res.end('new card added')
  })
  app.post('/user/addcard', app.isAuthenticated, function(req, res, next) {
    res.send('ajax posts authenticate')
  })
}

function __addNewCard(req, res, next) {
  console.log(req)
  if(!req.testcard){req.testcard = TEST_CARD}
  User.findOne({username: req.user.username}, function(err, user) {
    if(err){res.render('error', err)}
    if(!err && user){
      console.log('adding new card to user ', user)
      if(!user.creditcards){
        user.creditcards = {}
        user.creditcards.testcard = req.testcard
        user.save()
        next()
      }
      else{console.log('testcard already done'); res.send('test card already done')}
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
     // need to update to reflect changes to user.js model
     // include defauilt values for new users
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
