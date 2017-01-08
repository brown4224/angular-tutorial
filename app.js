var express = require('express');
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

//Port INFO
var port = 3000;


app.use('/', express.static( __dirname + '/public'));


io.on('connection', function (socket) {
    console.log('A socket.io connection occurred')
});

server.listen(port);
