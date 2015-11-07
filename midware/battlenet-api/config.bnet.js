module.exports = function(opts){
  var keys = Object.keys(opts)
  var bnet = require('battlenet-api')((opts.API_KEY? opts.API_KEY : opts))
  return bnet
}//delete this file
