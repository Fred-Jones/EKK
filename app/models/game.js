//1.should expose the model for the wager collection
//2.each wager should contain date, who created,
//3.a new game model should be created for each CATEGORY of blizzard game
var gameSemilla = require('./game.semilla.js')
var mongoose = require('mongoose')
var simpleGameSchema = new mongoose.Schema({
  name: String,
  meta: {
    category: String, //wow, sc2, etc.
    datecreated: String,
    idwhocreated: String,
    description: String,
    currency: String
  },
  parameters: {
    dateopen: String,
    dateclose: String,
    pot: String,
    winners: {
      numberwinners: Number, //number of winners possible ie top 3
      //consider implementing as an Object where ''
      ids: Array, //an array of user IDs. winners.ids[0] == top prize
      payout: Array //an array of prize money indexed the same as winners.ids
    },
  players: Object // 'userid':'ante'
  }
})

module.exports = mongoose.model('game', simpleGameSchema)
