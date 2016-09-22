var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    http = require('http'),
    session = require('express-session'),
    passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    mongoose = require('mongoose'),
    canyonCtrl = require('./controllers/canyonCtrl'),
    User = require('./models/Users'),
    zoneCtrl = require('./controllers/zoneCtrl'),
    usersCtrl = require('./controllers/usersCtrl'),
    port = process.env.PORT,
    app = express();



//app.use(session({secet: 'Here I go again on my own.'}));
//app.use(passport.initialize());
//app.use(passport.session());
//
//passport.use(new FacebookStrategy({
//        clientID: keys.facebookId,
//        clientSecret: keys.facebookSecret,
//        callbackURL: '/auth/facebook/callback'
//    }, function(token, refreshToken, profile, done) {
//        User.findOne({
//            'facebookId': profile.id
//        }, function(findErr, foundUser){
//            if (findErr) {
//                return done(findErr, false);
//            } else if (!foundUser) {
//                var newUser = {
//                    name: profile.displayName,
//                    facebookId: profile.id
//                };
//                User.create(newUser, function (createErr, createdUser) {
//                    if (createErr) {
//                        return done(createErr, false);
//                    } else {
//                        userId = createdUser._id;
//                        return done(null, createdUser);
//                    }
//                })
//            } else {
//                userId = foundUser._id;
//                return done(null, foundUser);
//            }
//        })
//}));
//
//passport.serializeUser(function(user, done) {
//    done(null, user);
//});
//
//passport.deserializeUser(function(obj, done) {
//    done(null, obj);
//});


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook'), function(req, res) {
    res.redirect('/#/');    
});
app.get('/api/autheduser', function(req,res) {
    res.send(req.user);
});
app.get('/api/users', usersCtrl.getUsers);
app.get('/api/zone', zoneCtrl.getZone);
app.get('/api/zone-1', zoneCtrl.getOneZone);

app.post('/api/zone', zoneCtrl.addZone);

app.put('/api/zone', zoneCtrl.editZone);

app.get('/api/canyon', canyonCtrl.getCanyon);
app.get('/api/canyon-1', canyonCtrl.getOneCanyon);
app.get('/api/canyon-2', canyonCtrl.getCanyons);

app.post('/api/canyon', canyonCtrl.addCanyon);
app.post('/api/comment', canyonCtrl.addComment);

app.put('/api/canyon', canyonCtrl.editCanyon);

var server = http.createServer(app);

app.listen(port, function() {
    console.log('listening on ' + port);
});

mongoose.connect(process.env.MONGOLAB_URI);
//mongoose.connection.once('open', function() {
//    console.log('Connected to MongoDB at ' + mongoUri);
//})