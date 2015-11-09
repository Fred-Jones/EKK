//the idea for this file is to have one callable
//module that suppports db updates etc.
//when configured with the app
//perhaps make a app.makePayment midware
var Promise = require('promise')

exports.config = function (pp, opt) {
  return pp = pp.configure(opt)
}
//newCard should save to DB with usr selected option?
exports.newCard = function (pp, card) {
  return new Promise(function(resolve, reject) {pp.creditCard.create(card, function(err, respcard) {
    if(err) reject(err);
    if(!err) resolve(respcard);
  })})
}

exports.test_card = {
  "type": "visa",
  "number": "4417119669820331",
  "expire_month": "11",
  "expire_year": "2018",
  "cvv2": "123",
  "first_name": "Joe",
  "last_name": "Shopper"
}
exports.bad_test_card = {
  "type": "visa",
  "number": "44171196698hhhhh",
  "expire_month": "11",
  "expire_year": "2018",
  "cvv2": "123",
  "first_name": "Joe",
  "last_name": "Shopper"
}

exports.test_config = {
  'mode': 'sandbox', //sandbox or live
  'client_id': 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
  'client_secret': 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
}
