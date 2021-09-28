var express = require('express');
var app = express();
var server = require('http').createServer(app);

var loader = require('./loaders');
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + "/public"));
/*
app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/public');
});
*/
loader.startServices(server);

server.listen(4200);