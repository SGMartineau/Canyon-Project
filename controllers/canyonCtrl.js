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
    }
    
}