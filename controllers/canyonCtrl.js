var Canyon = require('../models/Canyon');


module.exports = {
    
    addCanyon: function( req, res ) {
        new Canyon(req.body).save(function( err, data ) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(data);
            }
        });
    },
    
    getCanyon: function( req, res ) {
        Canyon.find().then(function( response ) {
            res.send(response);
        });
    },
    
    getOneCanyon: function( req, res) {
        Canyon.findOne({ _id: req.query._id }, function(err, canyon){
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(canyon);
            }
        })
    },
    
    getCanyons: function( req, res) {
        Canyon.find({ zoneId: req.query.zoneId}, function( err, canyons ){
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(canyons);
            }
        })
    },
    
    editCanyon: function (req, res) {
        Canyon.findByIdAndUpdate(req.query._id, req.body, function( err, data ) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(data);
            }
        });
    },
    
    addComment: function ( req, res ) {
        Canyon.findById(req.query._id, function( err, canyon ) {
            if (err) {
                res.status(500).send(err);
            } else {
                canyon.comments.push(req.body);
                canyon.save(function( err, data ) {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.send(data);
                    }
                })
            }
        })
    }
    
}