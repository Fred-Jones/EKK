var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  res.render('index')
});

router.get('/atrium', function (req, res, next) {
  // will be general about page for the public
  res.render('atrium')
})
