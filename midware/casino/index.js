//TEST REQUIREs (delete in production)
var app = require('./res/app.js')
var mongoDB = null
//END TEST REQUIREs

//The Casino holds the Game and Wager objects
//Games are definitions of available games to bet on
//Wagers are a property of Game instance, an array of all users who have bet
function Casino(description, type) {
  this.description = (description ? description : null)
  this.type = type // one of WOW, LOL, SC2, DBLO
  this.games = {
    wow: [], //an array of game instances
    lol: [],
    sc2: [],
    dblo:[]
  }
}
function Game(mid, mgame) {
  this.mid = null //Game id in mongodb
  this.uid = null //uniqueid independent of mongodb
  this.mgame = null //?some kind of pointer to this game in mongo? ?The mongo model itself?
  this.wagers = null //all the wagers that have been placed
}
function Wager(mid, userWhoCreated) {
  this.mid = mid//Wager id in mongodb
  this.createdBy = userWhoCreated //?should be user who placed the wager?
}

Casino.prototype.hasValidCard = function(user) {
  //helper method to verify that a given user has a valid credit card in order to place a wager

}
Casino.prototype.addNewGame = function() {
  //should handle updates in mongo

}
Game.prototype.addNewWager = function(w) {
  //check that type of w is wager, then append w to this.wagers
}
Wager.prototype.placeWager = function() {
  //
}

exports.Casino = Casino
exports.Game = Game
exports.Wager = Wager

// exports.hasValidCard = function(game, req_user, cb){
//
// }
// exports.placeWager = function(game, wager, cb) {
//
// }
// exports.newWager = function() {
//
// }
// exports.newGame = function(game, user, cb) {
//
// }
