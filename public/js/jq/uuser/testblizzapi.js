function tcb(data) {
  console.log(data)
}
var b = new BlizzWow()
//works fine//
// var bb = b.getAchievementDescription(2144, function(data) {
//   console.log(data)
//
// })
// //wtf result is array? or what?//
// bb = b.getAuctionDataStatus('medivh', tcb)
// bb = b.getAbilities()

//how to get all methods of BlizzWow object
var bmethods = Object.getOwnPropertyNames(b.__proto__)
console.log(bmethods)

var gg = b.getRegionLeaderboard(function(d) {
  console.log(d, d.challenge, d.challenge[0].groups[0].date)
  var challenge_list = d.challenge
  var maps_list = []
  var groups_list = []
  for(var i in challenge_list) {
    maps_list.push(challenge_list[i].map)
    //chalennge_list[i].groups /*100 per challenge*/
  }
  console.log(maps_list)

})
