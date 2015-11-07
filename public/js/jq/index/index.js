var socket = io()
var bw = new BlizzWow()

$(document).ready(main)
function main() {
  //http blizz query
  // bw.getRegionLeaderboard(function(err, dt) {
  //   console.log(dt)
  //   console.log(err)
  // })
  //SOCKET
  socket.emit('message', 'sup')
  socket.emit('battlenetquery', 'msg')
  socket.on('message', function(dt){
    console.log(dt)
  })

  socket.emit('blizzindexquery', 'hello')
  socket.emit('sc2profileprofile', 'oyoy')
  socket.on('blizzindexquery', function(data) {
  //function appendToDom(data){...}
    console.log('blizz query')
    console.log(data)
  })
  socket.on('battlenetquery', function(dt) {
    var d = dt;
    console.log(dt)
    // var objs = {}
    // d.challenge.forEach(function(challenge) {
    //   console.log(challenge.groups) //0 length arrays
    // })
  })
  socket.on('sc2profileprofile', function (dt) {
    //this is literally constructing a character
    var d = dt
    var props = []
    putthesekeysinthat(d, props)//array of d's keys
    var elemlist = returnelemlist(d, props)


  })
  socket.on('error', function(err) {
    console.log(err)
  })

}

// BLIZZSOCK FUNCTIONS
//// sc2profileprofile
function returnelemlist(d, ps) {
  //should return a list of <li>
  // var liprototype = $('<div>').class('licp')
  var prelist = []
  for(p in ps) {
    console.log(ps[p], d[ps[p]])
    prelist.push(ps)
    // var cp = liprototype.copy().append(d[ps[p]]/*text of interest*/)
    //list.push(cp)

  }

  return prelist
}
function putthesethingsinthat(thesethings, that) {
    var _that = []
    for(prop in thesethings){
      _that.push(prop)
    }
   return _that
}
// // end sc2profileprofile
// END BLIZZSOCK FUNCTIONS
