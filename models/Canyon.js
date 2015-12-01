var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Canyon = Schema({
    name: { type: String, required: true },
    rating: Number,
    difficulty: { type: String, required: true },
    comments: [{
        userName: { type: String, required: true },
        difficulty: Number,
        comment: String,
        length: String,
        date: { type: Date, default: new Date() }
    }],
    zone: { type: String },
    arrive: { type: String, required: true },
    approach: { type: String, required: true },
    gear: { type: [String], required: true },
    photos: [String],
    hike: String
});

module.exports = mongoose.model('Canyon', Canyon);