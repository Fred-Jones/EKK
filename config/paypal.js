var pp = require('paypal-rest-sdk')
var paypal_strategy = require('../midware/payments/paypal/paypal.js')
paypal_strategy.config(pp, paypal_strategy.test_config)

module.exports = function(app) {
  app.makeTestPayment = __make_test_payment
  return
}

function __make_test_payment(req, res, next) {
  var pms = paypal_strategy.newCard(pp, paypal_strategy.test_config)
  pms.then(function(card_response) {
    console.log(card_response)
  })
    next()

}
