var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Canyon = Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    hike: {type: String, required: true},
    drive: {type: String, required: true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
    technical: {type: Number, required: true},
    water: {type: String, required: true},
    time: {type: String, required: true},
    risk: {type: String, required: true},
    quality: {type: Number},
    numRepels: {type: Number},
    longRepel: {type: Number}
});

module.exports = mongoose.model('Canyon', Canyon);


//  "_id": "57d751f16bbfae55548f7f48"
//  "57d753fa2f2cab5f54cf923f"
