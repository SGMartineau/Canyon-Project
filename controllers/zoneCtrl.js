var Zone = require('../models/Zones');

module.exports = {
    
    addZone: function (req, res) {
        new Zone(req.body).save(function (err, data) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(data);
            }
        });
    },
    
    getZone: function( req, res ) {
        Zone.find().then(function (response) {
            res.send(response);
        });
    }
    
}