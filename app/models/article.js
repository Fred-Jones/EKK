// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: String,
  url: String,
  text: String
});

ArticleSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });
module.exports = mongoose.model('article', ArticleSchema);

var plantarSemilla = require('./article.semilla.js')
plantarSemilla({title:"semilla", url:"www.google.com", text: "La semilla que no ne crece"});
