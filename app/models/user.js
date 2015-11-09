//reference http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt
var bc = require('bcryptjs')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  profile: {
    profpic: String
  },
  gameids: String,
  wagerids: String,
  creditcards:{},
  loginAttempts: { type: Number, required: true, default: 0 },
  lockUntil: { type: Number }
})
// creditcard:{
//   type: String,
//   number: Number,
//   expiremonth: Number,
//   expireyear: Number,
//   cvv2: Number,
//   firstname: String,
//   lastname: String
// }

userSchema.pre('save', function (next) {
  var user = this
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    return next();
  }else{
    bc.genSalt(10, function(err, salt) {

        if (err) return next(err);
        //hash pwd
        bc.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
  }
  // if(!user.isModified('creditcard')){
  //   return next()
  // }else{
  //   bc.genSalt(10, function(err, salt) {
  //     if (err) return next(err);
  //     bc.hash(user.creditcard.number, salt, function(err, hash) {
  //       if(err) return next(err);
  //       user.creditcard.number = hash
  //       next()
  //     })
  //   })
  // }

})

// userSchema.methods.comparePassword = function(candidatePassword, cb) {
//     bc.compare(candidatePassword, this.password, function(err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// }
//
// userSchema.methods.hasValidCard = function(callback) {
//   console.log(this.username)
// }
// userSchema.statics.failedLogin = {
//   NOT_FOND: 0,
//   PASSWORD_INCORRECT: 1,
//   MAX_ATTEMPTS: 2
// }

module.exports = mongoose.model('user', userSchema)
