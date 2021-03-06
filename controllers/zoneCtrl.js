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
        Zone.find().populate('canyons').then(function (response) {
            res.send(response);
        });
    },

    editZone: function (req, res) {
        Zone.findOne({ _id: req.query._id},  function( err, zone ) {
            if (err) {
                res.status(500).send(err);
            } else {
                zone.canyons.push(req.query.canyonId);
                zone.save();
                res.send(zone);
            }
        });
    },
    
    getOneZone: function( req, res) {
        Zone.findOne({ _id: req.query._id }, function(err, zone){
            if (err) {
                res.status(500).send(err);
            } else {
                zone.save();
                res.send(zone);
            }
        })
    }

}