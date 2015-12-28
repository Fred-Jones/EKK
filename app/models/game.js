// var gameSemilla = require('./game.semilla.js')
var mongoose = require('mongoose')
var gameSchema = new mongoose.Schema({
  name: String,
  meta: {
    description: String,
    category: String, //wow, sc2, etc.
    datecreated: String,
    idwhocreated: String,
    currency: String
  },
  parameters: {
    dateopen: String,
    dateclose: String,
    isopen: Boolean,
    pot: String,
    winners: {
      numberwinners: Number, //number of winners possible ie top 3
      ids: Array, //an array of user IDs. winners.ids[0] == top prize
      payout: Array //an array of prize money indexed the same as winners.ids
    },
  wagers: Array // array of wager objects {userid: ammount, userid: ammount}
  }
})

gameSchema.pre('save', function (next) {
  var self = this
  if(checkMetaProperty(self)) {
    //TODO handle case: self.meta is g2g
  }else{
    //TODO need to handle this batter
    //case: game.meta object has an unfilled property. One of [category, datecreated, ...]
    next()
  }
})

module.exports = mongoose.model('game', gameSchema)

function checkMetaProperty(g) {
  var m = g.meta
  for (property in m) {
    if(!m.property) {
      throw new Error('Game model requires meta property to be completely filled')
      return
    }else{
      return true
    }
  }
}
