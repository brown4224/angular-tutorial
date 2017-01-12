var express = require('express');
var app = express();
var path = require('path');

var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

var staticFiles = path.join(__dirname + '/public');
var imagePath = path.join(__dirname + '/public/images');

//Port INFO
var port = 3000;

// Not sure why angular want to use port 3001
app.use('/', express.static(staticFiles));

// application -------------------------------------------------------------
// app.get('*', function(req, res) {
//     res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
// });



io.sockets.on('connection', function (socket) {
  console.log('A connection occurred');
    socket.on('echo', function (data) {
      console.log('Received Request');
        socket.emit('echo', data);
    });

    socket.on('echo-ack', function (data, callback) {
        callback(data);
    });
});

server.listen(port);
