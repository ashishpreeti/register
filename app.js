var express = require('express');
var app = express();
var path = require('path');
var mongodb = require('mongodb').MongoClient;
var port = process.env.PORT || 5000;

var routes = require('./server/routes/index');

// view engine setup
app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine', 'jade');

app.use(express.static('app/views'));
app.use(express.static('public'));
app.use(express.static('dist'));
app.use(express.static('node_modules'));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Resource Not Found');
    err.status = 404;
    next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


var row = {
    name: 'John Doe',
    age: '25',
    sex: 'Male',
    country: 'UK'
};

app.get('/register', function(req, res){
    console.log('submit to mongo db....');
    var url = 'mongodb://localhost:27017/angulartest';
    mongodb.connect(url, function (err, db) {
        var collection = db.collection('userdata');
        collection.insertOne(row, function (err, results) {
            res.send(results);
            db.close();
        });
    } );

});

app.listen(port, function(){
    console.log('running server on port ' + port);
});
