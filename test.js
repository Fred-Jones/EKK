//RIOT MIDWARE
var Riot = require('./midware/riot/index.js').init
var r = new Riot('7373751d-df26-46a0-90ae-82037012187a')
var Promise = require('promise')

console.log(r.api.lol.region('us').version('v2.5'))
//api.lol.
//staticdata.
var sdtest = r.api.lol
//region('us').
//version10
  var summoner = r.api.lol.region('us').version('v1.0').summoner
  summoner(function(err, response, body) {
    console.log(body)
  })
  // //WORKS WITH PROMISES
  // var s = new Promise(function(resolve, reject) {
  //   summoner(function(err, response, body) {
  //     if(!err){resolve(body)}
  //   })
  // }).then(function(data){
  //   console.log(data)
  // })
//version10
  var summonerv12 = r.api.lol.region('us').version('v1.2')
// r.api.lol.region('us').version('2.5').league.bySummoner.sumonerId('')
