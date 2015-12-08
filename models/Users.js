var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var User = Schema({
    name: String,
    facebookId: String
});

module.exports = mongoose.model('User', User);