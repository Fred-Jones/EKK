function Statstable() {

  this.response
}
//set up stats table constructor with method for init with
//default data
Statstable.prototype.lol = {}
Statstable.prototype.wow = {}
Statstable.prototype.sc2 = {}
Statstable.prototype.dblo ={}
Statstable.prototype.initWithData = function(game) {
  if (!game) game = 'wow'
  //query all necessary stuff, append to table
}
Statstable.prototype.initWithTestData = function(game) {

}
//add methods to constructor. For example, a riot query
for (m in methods){
  Statstable.prototype[m] = methods[m]
}
