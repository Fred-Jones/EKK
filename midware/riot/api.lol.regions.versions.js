var request = require('request')

module.exports = function(key, region, version) {
  var v = {
    v25: 'v2.5',
    v12: 'v1.2',
    v10: {
      summoner: function(cb) {return _summoner(key, region, version, cb)}
    }
  }
  vv = returnversion(version)
  return v[vv]
}

function returnversion(v) {
  var r = v.split('.').join('')
  return r
}

function returnquery(k, r, v) {
  return 'http://google.com'
}

function _summoner(k, r, v, callback) {
  var c = callback
  query = returnquery(k,r,v)
  return request.get(query, callback)
}
