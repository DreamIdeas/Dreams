var express = require('express');
var app     = require('express')();
var http    = require('http').Server(app);
var io      = require('socket.io')(http);
var port    = process.env.PORT || 80;



app.use(express.static(__dirname + '/../client/'));



io.on('connection', function(socket){
  socket.broadcast.emit('chat message', "Quelqu'un vous a rejoint.");

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});



http.listen(port, function(){
  console.log('listening on *:' + port);
});
