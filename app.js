var express = require('express');
var app = express();
var path = require('path');

var server = require('http').Server(app);
var io = require('socket.io')(server);

//Port INFO
var port = 3000;

// Not sure why angular want to use port 3001
app.use( express.static(path.join(__dirname + '/public')));

// application -------------------------------------------------------------
app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});


io.on('connection', function (socket) {
    console.log('A socket.io connection occurred')
});

server.listen(port);
