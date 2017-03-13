var express = require('express');
var app     = require('express')();
var http    = require('http').Server(app);
var io      = require('socket.io')(http);
var port    = process.env.PORT || 80;



app.use(express.static(__dirname + '/../client/'));



io.on('connection', function(socket){
  socket.broadcast.emit('chat message', `Quelqu'un a rejoint la salle.`);

  socket.on('mouse move', function(mousePosition){
    mousePosition = JSON.parse(mousePosition);
    var user = {
      id: socket.id,
      x: mousePosition.x,
      y: mousePosition.y
    };
    socket.broadcast.emit('user move', JSON.stringify(user));
  });

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function () {
    var user = {
      id: socket.id
    };
    socket.broadcast.emit('user leave', JSON.stringify(user));
  });
});





http.listen(port, function(){
  console.log('listening on *:' + port);
});
