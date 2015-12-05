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

    getZone: function (req, res) {
        Zone.find().then(function (response) {
            res.send(response);
        });
    },

    editZone: function (req, res) {
        console.log(req.zone._id);
        Zone.findByIdAndUpdate(req.zoneObj._id, req.zoneObj, function( err, data ) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(data);
            }
        });
    },
    
    getOneZone: function( req, res) {
        Zone.findOne({ _id: req.query._id }, function(err, zone){
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(zone);
            }
        })
    }

}