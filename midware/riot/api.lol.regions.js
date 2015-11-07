versions = require('./api.lol.regions.versions.js')
module.exports = function (key, region) {
  return {
    version: function(version) {
      return versions(key, region, version)
    }
  }
}
