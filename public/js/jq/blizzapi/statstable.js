//for each tab, on d.ready, instantiate a LocalQuery
//object that takes the id of the tab and sets the id
//as a property

var LoaclQuery = function() {
  this.id = new String()
  this.payload = {
    method: 'POST',
    url: 'http://localhost:3000/q',
    data: {
      gamename: 'wow',
      category: 'pvp',
    }
  }
}
LocalQuery.prototype.send = function (opts) {
  return $.ajax(this.payload)
}

$(document).ready(handleStatsTable)

function handleStatsTable() {
  var $statstable = $('.statstable')
  if($statstable.length < 1){
    console.log('No stats table...')
    return
  }else{
    console.log('+Table elements')
  }

}

// function LocalQuery() {
//   this.payload = {
//     method: 'POST',
//     url: 'http://localhost:3000/q',
//     data: {
//       gamename: 'wow',
//       category: 'pvp',
//     }
//   }
//
// }
//
// localQuery.prototype.post = function() {
//   return $.ajax(this.payload)
//
// }
