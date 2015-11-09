var user = require('../app/models/user.js')
var pp = require('paypal-rest-sdk')
var paypal_strategy = require('../midware/payments/paypal/paypal.js')
paypal_strategy.config(pp, paypal_strategy.test_config)

module.exports = function(app) {
  app.makeTestPayment = __make_test_payment
  app.addCard = __add_card
  return
}

function __make_test_payment(req, res, next) {
  // var pms = paypal_strategy.newCard(pp, paypal_strategy.test_card)
  // pms.then(function(card_response) {
  //   console.log(card_response)
  // })
    next()

}

function __add_card(req, res, next) {
  var pms = paypal_strategy.newCard(pp, paypal_strategy.test_card)
  pms.then(function(card_response) {
    var card_status = (card_response.state == 'ok')
    if(card_status)
    console.log('GOOD CARD!!!\n\n', card_response)
    addCardToUser(req.user, card)
    next()
  }).catch(function(err) {
    console.log('BAD CARD!!!\n\n', err)
    res.redirect('/user')
  })

}

function addCardToUser(uu, card) {
  user.findOne({username:uu.username}, function(err, u) {
    if(!err && u) {
      // u.creditcards[]

    }else{
      console.log('else')
    }
  })
}
