var db = require("../db");

module.exports = function(req, res){
    var options = {
        eventId: req.params[0]
    }

    db.get("event", options, function(eventData){
        var resStr = JSON.stringify(eventData);
        res.send(resStr);
    });
}