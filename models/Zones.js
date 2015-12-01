var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Zone = Schema({
    name: {type: String, required: true},
    description: String,
    latitude: String,
    longitude: String
});

module.exports = mongoose.model('Zone', Zone);