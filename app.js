var express = require('express');

var app = express();

var port = 5000;


app.use(express.static('public'));
app.use(express.static('src/views'));
app.get('/', function(req, res){
    res.send('Hello World');
});


app.get('/register', function(req, res){
    res.send('Some useful government service');
});



app.listen(port, function(){
    console.log('running server on port ' + port);
});
                                        
