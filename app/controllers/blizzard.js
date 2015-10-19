//should just hit on client side???
//
//can hit games/wagers on server side (mongo(redis?))
//can hit general blizzad stats on client
//
//My server is single source of truth??
//should authenticate rest api clients? Yes
// should just return json dont mess with socket? Yes
// created node_module for blizzard-client
//    require('blizzard-client')(app) -> app.blizzard(query) -> {next(req.result)} -> res.json(req.result)
module.exports = function (app) {
  // app.get('/blizzard/s/'
          // app.isAuthenticated,
          // app.blizzard, function(req, res, next) {
          //         socket.join(req.body.room, function(err,socket) {
          //           socket.emit()
          //         })
          //         socket.broadcast(req.room, blizzardstuff)
          //         OR
          //         blizzardMidwareCall(req.blizz, res.json(stuff));
  // })

}
