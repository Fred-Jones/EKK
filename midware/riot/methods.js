// var routes = require('./routes.js')
var regions = require('./api.lol.regions.js')
var staticdata = require('./api.lol.staticdata.js')
// var observerMode = require('observermode')

function _lol(key) {
  return {
    test: key,
    staticdata: 'none',
    region: function(region) {
      return regions(key, region)
    }
  }
}
function _staticdata(key) {
  return {
    region: regions(key, region)
  }
}

module.exports = function(key) {
  return {
    api: {
      lol: _lol(key),
      staticdata: _staticdata(key)
    },
    observationMode: {

    }
  }
}
