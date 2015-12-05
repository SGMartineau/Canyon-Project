var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Canyon = Schema({
    name: { type: String, required: true },
    rating: Number,
    difficulty: { type: String, required: true },
    comments: [{
        userName: String,
        difficulty: Number,
        comment: String,
        length: String,
        date: { type: Date, default: new Date() }
    }],
    zoneId: { type: String, required: true},
    arrive: { type: String, required: true },
    approach: { type: String, required: true },
    gear: { type: String, required: true },
    photos: [String],
    hike: String,
    description: String
});

module.exports = mongoose.model('Canyon', Canyon);