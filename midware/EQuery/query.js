var curl = require('curlrequest')
var Promise = require('promise')

module.exports = function(apikey, args, cb) {
  var base = 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/RiotSchmick?api_key='
  var url = base + apikey
  return curl.request(url, cb)
}
