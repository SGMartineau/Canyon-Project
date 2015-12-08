var User = require('../models/Users');

module.exports = {
    
    getUsers: function( req, res ) {
        User.find().then(function(response) {
            res.send(response);
        })
    }
    
}