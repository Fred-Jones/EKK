var Article = require('./article.js');

// ErrorCastError: Cast to string failed for value "[object Object]" at path "title"
module.exports = function(title, url, text) {
  // var semilla = new Article({
  //   title: title,
  //   url: url,
  //   text: text
  // })
  // Article.findOne({title: title, url: url, text: text}, function (err, article){
  //   if(err) console.log('Error' + err)
  //   if(!err && article) {
  //     console.log('Article not seeded. Already exists\n--'+article)
  //
  //   }
  //   if(!err && !article) {
  //     console.log('Seeeded db with article --' + article)
  //     semilla.save()
  //   }
  //
  //
  // })
  // return semilla
  return null
}
