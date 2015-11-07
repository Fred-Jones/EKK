var Promise = require('promise')
var bna = battlenet_api = require('battlenet-api')

//tehese methods are implemented in battlenet.js

module.exports = {
  achievement: function(options) {
    return new Promise(function(resolve, reject) {
      resolve('this is a test')
    })
  },
  auction: function(options) {

  },
  pvp: function(options) {
    return new Promise(function(resolve, reject) {
      bna.wow.pvp.leaderboards({origin: 'us', bracket: '2v2'})
    })
  }
}

// achievement: methods.achievement,
// auction: methods.auction,
// battlepet: methosd.battlepet,
// challenge: methods.challenge,
// character: methods.character,
// item: methods.item,
// guildprofile: methods.guildprofile,

// pvp: methods.pvp,
// // {origin: 'us', bracket: '2v2' || '3v3' || '5v5' || 'rgb'}
//Returns --
/*{rows:[{ ranking: 5015,
           rating: 1876,
           name: 'Fatherwong',
           realmId: 87,
           realmName: 'Windrunner',
           realmSlug: 'windrunner',
           raceId: 7,
           classId: 5,
           specId: 256,
           factionId: 0,
           genderId: 0,
           seasonWins: 56,
           seasonLosses: 46,
           weeklyWins: 0,
           weeklyLosses: 0 }]} */
