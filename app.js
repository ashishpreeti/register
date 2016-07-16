var express = require('express');
var app = express();
var path = require('path');
var mongodb = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;

var routes = require('./server/routes/index');
var user = require('./server/routes/user');

// view engine setup
app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('app/views'));
app.use(express.static('public'));
app.use(express.static('dist'));
app.use(express.static('node_modules'));

app.use('/api', routes);
app.use('/api/user', user);

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


app.listen(port, function(){
    console.log('running server on port ' + port);
});
