//The wager api should
// //1. first authenticate user
// //2. then parse the req for these params
//  username or id, desired game(game id), desired ammount, ?desired format(paypal, skrill)?
//  redirect to user

// var wagerApi = '../../midware/wager/<wager.js>');
var pp = require('paypal-rest-sdk')
var paypal = require('../../midware/payments/paypal/paypal.js')//path to paypal config
//paypal.config() = func(pp, opt)
//opt = {
//  String:String
//  type : visa
//  number : 4417119669820331,
//
//}
//??should include app.ppOpts property???
paypal.config(pp, paypal.test_config)
//var User = require('../models/user.js')


module.exports = function (app) {
  // app.get('/test_wager', function(req, res) {
  //   res.send('route setup for posts')
  // })
  app.get('/test_wager', app.makeTestPayment, function(req, res) {
    console.log(req.msg)
    res.render('index');
  })

}
