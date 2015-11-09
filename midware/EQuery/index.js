//require the riot module to use the dot method syntax which
//is already set up in that module
var query = require('./query.js')
function Riot(ak) {this.apikey = ak || null}
Riot.prototype.setapikey = function(apikey) {
  this.apikey = apikey
}
Riot.prototype.query = function(args, cb) {
  query(this.apikey, args, cb)
}
module.exports = Riot
