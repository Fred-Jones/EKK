var LocalStrategy = require('passport-local').Strategy,
 OAuthStrategy = require('passport-oauth').OAuthStrategy,
 OpenIDStrategy = require('passport-openid'),
 TwitterStrategy = require('passport-twitter');
var User = require('../app/models/user.js');

module.exports = [
//forEach() iterable object -> return new __Strategy()
  new LocalStrategy(function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!(user.password == password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  )//,
  // OAuthStrategy: new OAuthStrategy(new OAuthStrategy(function() {})),
  // OpenIDStrategy: new OpenIDStrategy(),
  // TwitterStrategy: new TwitterStrategy()
]
