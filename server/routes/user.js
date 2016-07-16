var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;

var row = {
    name: 'John Doe',
    age: '25',
    sex: 'Male',
    country: 'UK'
};


/* GET home page. */
router.get('/', function(req, res) {
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

module.exports = router;


module.exports = router;
