var Usuario = require('./user.js')
module.exports = function (un, pw, email) {
  var semilla = new Usuario({
      username: un,
      password: pw,
      email: email,
      id: 0
    })
  Usuario.findOne({username: un, password: pw}, function (err, user) {
      if(err) console.log(err)
      if(user) console.log(user + ' --already seeded.')
      if(!err && !user) {
        semilla.save()
      }
    })
  return semilla
}
