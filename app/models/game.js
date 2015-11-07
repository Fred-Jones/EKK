//1.should expose the model for the wager collection
//2.each wager should contain date, who created,
//3.a new game model should be created for each CATEGORY of blizzard game
var mongoose = require('mongoose')
var simpleGameSchema = new mongoose.Schema({
  gameid: Number,
  meta: {
    category: String, //wow, sc2, etc.
    datecreated: String,
    idwhocreated: String,
    dateopen: String,
    dateclose: String,
    description: String
  },
  parameters: {
    pot: Number,
    winners: {
      numberwinners: Number, //number of winners possible ie top 3
      //consider implementing as an Object where ''
      ids: Array, //an array of user IDs. winners.ids[0] == top prize
      payout: Array //an array of prize money indexed the same as winners.ids
    },
  players: Object // 'userid':'ante'
  }
})

exports.simpleGameSchema = mongoose.model('game', simpleGameSchema)
