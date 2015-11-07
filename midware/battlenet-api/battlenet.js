// should make a midware that is callable with query parameters
// passed by the user in req.body
// -*-Categories-*-
// Achievement
// // .../:id
// Auction
// // .../data/:realm
// Battlepet
// // .../ability/:abilityid
// // .../species/:speciesid
// // .../stats/:speciesid
// // /.../stats/:speciesid
// Challenge
// // .../:realm
// // .../region
// Character
// // .../:realm/:characternam
// // (for charprofile, ahcievements, appearance, feed, guild, hunterpets, items, mounts, pets, petslots, progression, pvp, quests, reputation, stats, talents, titles, audit)
// Item
// // .../:itemid
// // .../set/:setid
// Guildprofile
// // .../guild/:realm/:guildname
// // (for guildprofile, members, achievements, news, challenge)
// PVP
// // .../leaderboard/:bracket

var config = require('./config.bnet.js')('uqtddrzuw8zuczzagfwy9bvxbh78ghgn')
var methods = require('./methods.js')

module.exports = {
  wow:  {
    achievement: methods.achievement,
    auction: methods.auction,
    battlepet: methods.battlepet,
    challenge: methods.challenge,
    character: methods.character,
    item: methods.item,
    guildprofile: methods.guildprofile,
    pvp: methods.pvp,
  },
  sc2:  {
    // null: methods.test,
    // null: methods.test,
    // null: methods.test,
    // null: methods.test,
    // null: methods.test,
    // null: methods.test,
    // null: methods.test,
    // null: methods.test,
  },
  dblo: {
    // null: methods.test,
    // null: methods.test,
    // null: methods.test,
    // null: methods.test,
    // null: methods.test,
    // null: methods.test,
    // null: methods.test,
  }
}
