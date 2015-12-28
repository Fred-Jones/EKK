//Yo se k sientes lo mismo lo k yo siento
//maginandome ncima de tu cuerpo
//2 en las noches kieres sentilme adentro
//y 2 gritando dame mas y mas

var methods = {}
methods.testRecursiveAssignment = function() {
  console.log(this)
}
methods.localRiotQuery = function(append) {
  var self = this
  var $loltab = $('#lol').css({overflow: 'scroll'})
  $.ajax({
    method: "GET",
    url: '/r/test'
  }).done(function(data){
      console.log('setting self.lol -> ', JSON.parse(data))
      var container = self.parseGeneralRiotQueryReturnContainerAndSetLol(data)//this is rendering bad cuz data is a string
      console.log('localRiotQuery: --> self.lol = ', self.lol)
      $loltab.append(container)
  })
}

 methods.parseGeneralRiotQueryReturnContainerAndSetLol = function(data) {
   var self = this
   self.response = JSON.parse(data.toString())
   var lolbody = $('<tbody>')
   for (key in self.response){
     var $td = $('<tr>')
     $td.append($('<td>').text(key))
     for(k in self.response[key]){
       console.log(k)
       $td.append($('<td>').text(k))
       $td.append($('<td>').text(self.response[key][k]))
      for(i in self.response[key][k]){
         $td.append($('<td>').text(self.response[key][k][i]))
       }
     }
     lolbody.append($td)
   }
   var tb = $('<table>', {class: 'table table-striped'})
   tb.append(lolbody)
   var $container = $('<div>', {class: 'container'}).css({height: '100px'}).append(tb)

   self.container = $container
   return $container
 }

function scanTreeReturnBSTable(obj) {
  //solves problem of enumerating json objects
  //should look something like this, but more general
  // var lolbody = $('<tbody>')
  // for (key in self.response){
  //   var $td = $('<tr>')
  //   $td.append($('<td>').text(key))
  //   for(k in self.response[key]){
  //     console.log(k)
  //     $td.append($('<td>').text(k))
  //     $td.append($('<td>').text(self.response[key][k]))
  //    for(i in self.response[key][k]){
  //       $td.append($('<td>').text(self.response[key][k][i]))
  //     }
  //   }
  //   lolbody.append($td)
  // }
  // var tb = $('<table>', {class: 'table table-striped'})
  // tb.append(lolbody)
  // var $container = $('<div>', {class: 'container'}).css({height: '100px'}).append(tb)
  //
  // self.container = $container
  // return $container
}
