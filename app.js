// IDEA
//      web-socket
//      realtime betting
//      send spinner from server to client, ajax on client side for blizzard
//      query on index.jade
//      create data polling system using socket.io
//      MLG.tv for streaming
//      consider wager flow: select game -> staging -> commit -> success
//        you will be notified of win/loss in your messages
//        email option
//      nodemailer confirm signup
//      redis wager db
// TODO
//      adding a game should be accessible by admin from browser
//      setup blizzard_api
//      finish setup paypal_api
//      finish riot api
//        query is done
//      setup game api and game db
//      setup image hosting gridfs
//      bcrypt passwords
//        done?
//      csurf needed? see note
//      because of ratelimits, must host data pertainging to a game locally
//      if the user is not logged in but navigating the site, should present signup link
//      change file names there are like 10 user.js files
//        never do that crap again
//      finish socket
//        socket is flimsy af with connections. HTTP better for homepage. Connect socket after user logs in
//        just make socket a chat
//      ??move strategies.js to midware/passport ??
//      make login & signup modals ... failure -> new page login
//      https
//        check note
//      modal for free 'money' on first login after signup
//      setup various AUTH schemas
//        one midware function to rule them all...?
//      play money??
//
//      PUSH HEROKU
//      sick frontend
//      adds?
//       ssl?
//          ansible
//       ppm on heroku for ssl, they are not cool with backdoors dont try
//

var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose')
mongoose.connect(config.db)
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db)
})
var models = glob.sync(config.root + '/app/models/*.js')
models.forEach(function (model) {
  require(model)
})
var app = express()
require('./config/express')(app, config)
// app.listen(config.port);
// // called in sock
var sock = require('./midware/io/socket_test.js')(app, config)


//DB SEEDS
// var game = new Object()
// game.opts = {}
// game.semila = require('./app/models/game.semilla.js')()



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
