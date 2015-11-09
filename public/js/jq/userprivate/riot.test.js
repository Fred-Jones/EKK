$(document).ready(main)
function main() {
  console.log('riot.test.js')
  $.ajax({
    method: "GET",
    url: '/r/test'
  }).done(function(data){
    $('')
  })
}
