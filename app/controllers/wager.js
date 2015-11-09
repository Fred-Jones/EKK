//The wager api should
// //1. first authenticate user
// //2. then parse the req for these params
//  username or id, desired game(game id), desired ammount, ?desired format(paypal, skrill)?
//  redirect to user

// var wagerApi = '../../midware/wager/<wager.js>');
//paypal.config() = func(pp, opt)
//opt = {
//  String:String
//  type : visa
//  number : 4417119669820331,
//
//}
//??should include app.ppOpts property???
var User = require('../models/user.js')
var bcrypt = require('bcryptjs')
var pp = require('paypal-rest-sdk')
var paypal = require('../../midware/payments/paypal/paypal.js')//path to paypal config
paypal.config(pp, paypal.test_config)
var User = require('../models/user.js')


module.exports = function (app) {
  app.get('/test_wager', app.isAuthenticated,
                         app.makeTestPayment,
                         function(req,res) {
                            res.redirect('/user')
                          }
  )
  app.get('/makewager/:gameid', app.isAuthenticated,
                                __canwager,
                                __hasValidCard,
                                function(req,res) {
                                  res.send('can wager, has valid card')
                                }
  )

}

function __canwager(req, res, next) {
  if(req.isAuthenticated()) {
    next()
  }else{
    res.redirect('/login')
  }
}

function __hasValidCard(req, res, next) {
  next()
}
