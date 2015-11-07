var Battle = function(opts) {
  var BASE_URL = 'http://google.com'
  var API_KEY;
  var keys = Object.getOwnPropertyNames(opts)
  for (i in keys) {
    if (i=='apikey'){
      return this.API_KEY = API_KEY
    }
  }
}

Battle.prototype.setAPI_KEY = function (key) {
  this.API_KEY = key
  
}
