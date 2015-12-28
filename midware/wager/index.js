/*
!!!!! THI MODULE HAS BEEN MOVED TO "casino" DIR !!!!!
*/

// // // // // // // // // // // // // // // // // //

//Games are definitions for games to bet on
//Wagers are a property of Game instance, an array of all users who have bet
function Casino() {

}
function Game(mid, mgame) {
  this.mid = //Game id in mongodb
  this.uid = //uniqueid
  this.mgame =
  this.wagers = //all the wagers that have been placed
}
function Wager(mid, userWhoCreated) {
  this.mid = mid//Wager id in mongodb
  this.createdBy = userWhoCreated
}
exports.Game = Game
exports.Wager = wager

exports.hasValidCard = function(game, req_user, cb){

}
exports.placeWager = function(game, wager, cb) {

}
exports.newWager = function() {

}
exports.newGame = function(game, user, cb) {

}
