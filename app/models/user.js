//reference http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt
var b = require('../../midware/bcrypt/bcrypt.js')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  //user
  username: String,
  email: String,
  password: String,
  profile: {
    profpic: String
  },
  loginAttempts: { type: Number, required: true, default: 0 },
  lockUntil: { type: Number }
})

userSchema.pre('save', function (next) {
  var user = this
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  b.genSalt(10, function(err, salt) {
      if (err) return next(err);
      //hash pwd
      b.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);
          // override the cleartext password with the hashed one
          user.password = hash;
          next();
      });
  });
})

userSchema.methods.comparePassword = function(candidatePassword, userpassword, cb) {
    b.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
userSchema.statics.failedLogin = {
  NOT_FOND: 0,
  PASSWORD_INCORRECT: 1,
  MAX_ATTEMPTS: 2
}

module.exports = mongoose.model('user', userSchema)
