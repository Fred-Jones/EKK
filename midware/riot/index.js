// apikey from config/config.js
// 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/RiotSchmick?api_key=<key>'
var methods = require('./methods')

var Riot = new Object()
Riot.init = function(apikey) {
  RP = this
  RP.api = (function(key){return methods(key).api})(apikey)
  RP.observerMode = (function(key){return methods(key).observationMode})(apikey)

}

exports.init = Riot.init
