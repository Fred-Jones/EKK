// 1) Create a new Statstable Object
// 2) Initialize the Statstable instance if there is no statstable in the dom
//  2b) Else set properties of stats_table to the desired dom elements with data
$(document).ready(statstable_Main)
function statstable_Main() {
  var stbl = document.getElementsByClassName('.statstable')
  if (!stbl) {
    console.log('No stats table')
    //append new Statstable().initWithTesttData
  }

}
