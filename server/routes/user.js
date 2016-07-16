var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;


router.post('/', function(req, res) {
    console.log('to mongo db....'+ JSON.stringify(req.body));
    var row = req.body;
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
