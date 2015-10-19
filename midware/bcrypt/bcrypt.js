//?should I just attach these methods to app to make it easy?
//...in espress.js just do... require(./thisfile)(app);
/*requiring this file means you get the bcrypt instance
as well, through exports.b*/
var b = require('bcryptjs')
var Promise = require('promise')

exports.hashAndSalt = function (pwd) {
  return new Promise(function(resolve, reject) {
    b.genSalt(10, function(err, salt) {
        if(err) reject(err)
        if(!err) {
          b.hash(pwd, salt, function(err, hpwd) {
            //store in db
            resolve(hpwd)
          })
        }
    })
  })
}

exports.compare = function(seq, align) {
  return new Promise(function(reject, resolve) {
    b.compare(seq, align, function(err, result) {
      if(err) reject(err);
      if(typeof result == 'boolean') {
        console.log(result, 'bcrypt result is boolean')
        resolve(result)
      }else{
        resolve(result)
      }
    })
  })
}

exports.bcrypt = b
