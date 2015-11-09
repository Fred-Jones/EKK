
//                   //##VINIMO DE PORTORRO TENEMO LA SANGRE##//
 // 6MMMMb/           |\dM      |\MM      |\`MM'`MMMMMMMMM `MM\     `M'MMMMMMMMMM `MMMMMMMMM
 //  |\8P |\YM        |\MMb      |\MM      |\MM  MM      \  MMM\     M /   MM   \  MM      \
 //   |\6M   |\Y      |\d'YM      |\MM      |\MM  MM         M\MM\    M     MM      MM
 //    |\MM           |\P `|\Mb    |\MM      |\MM  MM    ,    M \MM\   M     MM      MM    ,
 //     |\MM          |\d'  |\YM    |\MM      |\MM  MMMMMMM    M  \MM\  M     MM      MMMMMMM
 //      |\MM         |\P    |\Mb    |\MM      |\MM  MM    `    M   \MM\ M     MM      MM    `
 //       |\MM        |\d'     |\YM   |\MM      |\MM  MM         M    \MM\M     MM      MM
 //        |\YM   |\6 |\MMMMMMMM|\bYM  |\MM      |\MM  MM         M     \MMM     MM      MM
 //         |\8b  |\d9|\d'       |\YM   |\MM      |\MM  MM      /  M      \MM     MM      MM      /
 //          |\YMMMM9 |\dM_       |\_dMM__|\MMMMMMM _|\MM__MMMMMMMMM _M_      \M    _MM_    _MMMMMMMMM

var express = require('express');
var session =require('express-session');
var glob = require('glob');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compress = require('compression');
var methodOverride = require('method-override');

//PASSPORTJS is required here//
var passport = require('passport');
var passport_midWare = require('./passport.js');

module.exports = function(app, config) {
  app.set('views', config.root + '/app/views');
  app.set('view engine', 'jade');

  var env = process.env.NODE_ENV || 'development';
  app.locals.ENV = env;
  app.locals.ENV_DEVELOPMENT = env == 'development';

  // app.use(favicon(config.root + '/public/img/favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(cookieParser());
  app.use(compress());
  app.use(express.static(config.root + '/public'));
  app.use(methodOverride());
  // passport authentication strategies
  app.use(session({secret: 'yoot', saveUninitialized: true, resave:true}));
  app.use(passport.initialize());
  app.use(passport.session());
  passport_midWare(app);
  // app.isAuthenticated (and related methods) are now setup
  //...every controller has access to these methods via app

  // paypal_midware(app)
  var paypal_midware = require('./paypal.js')(app);

  var controllers = glob.sync(config.root + '/app/controllers/*.js');
  controllers.forEach(function (controller) {
    require(controller)(app);
  });


  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  if(app.get('env') === 'development'){
    app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err,
        title: 'error'
      });
    });
  }

  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
      });
  });



};
