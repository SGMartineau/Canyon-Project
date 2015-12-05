var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    canyonCtrl = require('./controllers/canyonCtrl'),
    zoneCtrl = require('./controllers/zoneCtrl'),
    port = 8090,
    app = express(),
    mongoUri = 'mongodb://localhost:27017/canyon';

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));


app.get('/api/zone', zoneCtrl.getZone);
app.get('/api/zone-1', zoneCtrl.getOneZone);
app.post('/api/zone', zoneCtrl.addZone);
app.put('/api/zone', zoneCtrl.editZone);
app.get('/api/canyon', canyonCtrl.getCanyon);
app.get('/api/canyon-1', canyonCtrl.getOneCanyon);
app.get('/api/canyon-2', canyonCtrl.getCanyons);
app.post('/api/canyon', canyonCtrl.addCanyon);



app.listen(port, function() {
    console.log('listening on ' + port);
});

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log('Connected to MongoDB at ' + mongoUri);
})