// IDEA
//      send spinner from server to client, ajax on client side for blizzard
//      query on index.jade
//^      create data polling system using socket.io
//      consider wager flow: select game -> staging -> commit -> success
//        you will be notified of win/loss in your messages
//        email option
//      nodemailer confirm signup
//      redis wager db
// TODO
//      cleanup
//        public/js && config && app/views
//^      user.public.jade && user.private.jade
//      setup general blizzard_frontend on index.jade
//      finish socket
//      csurf needed? see note
//      bcrypt passwords
//      adding a game should be accessible by admin from browser
//        ssl?
//          ansible
//        @ppm on heroku for ssl, they are not cool with backdoors dont try
//      attach genHash and compare methods to User model
//          maybe not such a good idea
//      ??move strategies.js to midware/passport ??
//      finish setup paypal_api
//      setup wager db
//      setup wager logic start with simple form, authenticate, etc
//        list of matches
//        create new match
//        place bet
//        my wagers
//      setup blizzard_api
//      https
//        check note
//      setup image hosting gridfs
//      make login & signup modals ... failure -> new page login
//      modal for free 'money' on first login after signup
//      setup various AUTH schemas
//        one midware function to rule them all...?
//      play money??
//
//      PUSH HEROKU
//      sick frontend
//      bitcoin_payment
//      adds?
//

var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose');
mongoose.connect(config.db);//should change config[env].db?
var db = mongoose.connection;//multiple dbs?
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});
var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
var app = express();
require('./config/express')(app, config);
// app.listen(config.port);
// // called in sock
var sock = require('./midware/io/socket_test.js')(app, config)

/* mucho brillo mucho flow mucha torta

                ' ' ' '
                | | | |
             @@@@@@@@@@@@@
             {~ ~ ~ ~ ~ ~}
             {~ ~ ~ ~ ~ ~}
           @@@@@@@@@@@@@@@@@
          {~ * ~ * ~ * ~ * ~}
          {~ * ~ * ~ * ~ * ~}
          @@@@@@@@@@@@@@@@@@@
             _____)*(_____
            /_____________\

*/
