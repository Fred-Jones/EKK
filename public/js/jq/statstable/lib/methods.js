var methods = {}
methods.testRecursiveAssignment = function() {
  console.log(this)
}
methods.localRiotQuery = function(append) {
  var self = this
  var $loltab = $('#lol')
  $.ajax({
    method: "GET",
    url: '/r/test'
  }).done(function(data){
    if(append){
      $loltab.text(data)
    }
    self.lol = data
    console.log('localRiotQuery: --> self.lol = ',self.lol)
  })
}
