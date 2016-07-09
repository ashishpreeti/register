var express = require('express');
var mongodb = require('mongodb').MongoClient;

var app = express();

var port = process.env.PORT || 5000;


app.use(express.static('public'));
app.use(express.static('src/views'));
app.get('/', function(req, res){
    res.send('Hello World');
});

var row = {
    name: 'John Doe',
    age: '25',
    sex: 'Male',
    country: 'UK'
};

app.get('/register', function(req, res){
    var url = 'mongodb://localhost:27017/registerApp';
    mongodb.connect(url, function (err, db) {
        var collection = db.collection('register');
        collection.insertOne(row, function (err, results) {
            console.log("sending the data to db here"+ JSON.stringify(results));
            res.send(results);
            db.close();
        } )
    } );

});



app.listen(port, function(){
    console.log('running server on port ' + port);
});

