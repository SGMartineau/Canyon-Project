var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Zone = Schema({
    name: {type: String, required: true},
    canyons: [{type: Schema.Types.ObjectId, ref: 'Canyon'}]
});

module.exports = mongoose.model('Zone', Zone);

