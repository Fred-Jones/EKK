function BlizzWow() {
  this.apikey = 'uqtddrzuw8zuczzagfwy9bvxbh78ghgn'
  this.secret = '2C4AXFPDqU2eKwZmWnZQEFjXXN3XkybN'
  this.basename = 'https://us.api.battle.net/wow/'
  //test properties
  this.__testrealm = 'test-realm'

}

BlizzWow.prototype.getAchievementDescription = function (id, cb) {
  var api = 'achievement/'
  return $.get(this.basename + api + id.toString(), {
    id: id,
    apikey: this.apikey,
    locale: 'us_en',
    jsonp: false
  }).done(cb)

}
BlizzWow.prototype.getAuctionDataStatus = function (realm, cb) {
  var api = 'auction/data/'
  return $.get(this.basename + api + realm, {
    apikey: this.apikey
  }).done(cb)
}

BlizzWow.prototype.getAbilities = function (abilityid, cb) {
  var api = 'battlepet/ability/'
  return $.get(this.basename + api + abilityid, {
    apikey: this.apikey
  }).done(cb)
}

BlizzWow.prototype.getSpecies = function (speciesid, cb) {
  var api = 'battlepet/species/'
  return $.get(this.basename + api + speciesid, {
    apikey: this.apikey,
    level: level,
    breedId: breedId,
    qualityId: qualityId,
    locale: 'en_US',
    jsonp: false
  }).done(cb)
}

BlizzWow.prototype.getStats = function (speciesid, cb) {
  var api = 'battlepet/stats/'
  return $.get(this.basename + api + speciesid, {
    apikey: this.apikey
  }).done(cb)
}

BlizzWow.prototype.getRealmLeaderboard = function (realm, cb) {
  var api = 'challenge/'
  return $.get(this.basename + api + realm, {
    apikey: this.apikey
  }).done(cb)
}

BlizzWow.prototype.getRegionLeaderboard = function (cb) {
  var api = 'challenge/region'
  return $.get(this.basename + api, {
    apikey: this.apikey
  }).done(cb)
}
//All character profile apis can be combined into one
//taking advantage of 'fields' field
BlizzWow.prototype.getCharacterProfile = function (realm, charname) {
  var api = 'character/'
  return $.get(this.basename + api + realm + '/' + charname, {
    apikey: this.apikey
  }).done(cb)
}

BlizzWow.prototype.getAchievements = function (realm, charname, cb) {
  var api = 'character/'
  // return $.get(,{
  //   apikey: this.apikey,
  //   fields: 'achievements'
  // })

}

BlizzWow.prototype.getAppearance = function () {


}

BlizzWow.prototype.getFeed = function () {
  var api = ''

}

BlizzWow.prototype.getGuild = function () {


}

BlizzWow.prototype.getHunterPets = function () {


}

BlizzWow.prototype.getItems = function () {


}

BlizzWow.prototype.getMounts = function () {


}

BlizzWow.prototype.getPets = function () {


}

BlizzWow.prototype.getPetSlots = function () {


}

BlizzWow.prototype.getProgression = function () {


}

BlizzWow.prototype.getPvp = function () {


}

BlizzWow.prototype.getQuests = function () {


}

BlizzWow.prototype.getReputation = function () {


}

BlizzWow.prototype.getStats = function () {


}

BlizzWow.prototype.getTalents = function () {


}

BlizzWow.prototype.getTitles = function () {


}

BlizzWow.prototype.getAudit = function () {


}
//End character api

BlizzWow.prototype.getItem = function (itemid, cb) {
  var api = 'item/'
  return $.get(this.basename + api + itemid, {
    apikey: this.apikey
  }).done(cb)
}

BlizzWow.prototype.getItemSet = function (setid, cb) {
  var api = 'item/set/'
  return $.get(this.basename + api + setid, {
    apikey: this.apikey
  }).done(cb)
}
//Combine?
//begin guild profile
BlizzWow.prototype.getGuildProfile = function (realm, guildname, cb) {
  var api = 'guild/'
  return $.get(this.basename + api + realm + '/' + guildname, {
    apikey: this.apikey
  }).done(cb)
}

BlizzWow.prototype.getMembers = function (realm, guildname, cb) {
  var api = 'guild/'

}
//end guild profile

BlizzWow.prototype.getLeaderboards = function (bracket, cb) {
  var api = 'leaderboard/'
  return $.get(this.basename + api + bracket, {
    apikey: this.apikey
  })
}
BlizzWow.prototype.getQuest = function (questid, cb) {
  var api = 'quest/'
  return $.get(this.basename + api + questid, {
    apikey: this.apikey
  }).done(cb)
}
BlizzWow.prototype.getRealmStatus = function (realm, status) {
  var api = 'quest/' + realm
  return $.get(this.basename + api).done(cb)
}

BlizzWow.prototype.getRecipe = function (recipeid, cb) {
  var api = 'recipe/'
  return $.get(this.basename + api +  recipeid, {
    apikey: this.apikey
  }).done(cb)
}

BlizzWow.prototype.getSpell = function (spellid, cb) {
  var api = 'spell/'
  return $.get(this.basename + api + spellid, {
    apikey: this.apikey
  }).done(cb)
}

BlizzWow.prototype.getBattlegroups = function (cb) {
  var api = 'data/battlegroups/'
  return $.get(this.basename + api, {
    apikey: this.apikey
  }).done(cb)
}

//...data/character etc should be combined
