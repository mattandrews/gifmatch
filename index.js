var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('gifs.html');
});

http.listen(process.env.PORT || 5000, function() {
    console.log('listening on *:5000');
});
