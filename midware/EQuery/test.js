
var Riot = require('./index.js')
var app = new Riot('7373751d-df26-46a0-90ae-82037012187a')
app.query('http://google.com', function(err, response, body) {
  console.log(err, response, body)
})
